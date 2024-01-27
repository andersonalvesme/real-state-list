import React, { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";
import './DoubleRangeSlider.css'
import { useDebouncedCallback } from "use-debounce";
import { PropertyAttributesType } from "@/app/properties/search";

type DoubleRangeSliderType = {
  min?: number,
  max?: number,
  onChange: Function,
  filters: PropertyAttributesType
};

export default function DoubleRangeSlider({ min = 0, max = 0, onChange, filters }: DoubleRangeSliderType) {
  const [minValue, setMinValue] = useState(filters.range_start ?? min);
  const [maxValue, setMaxValue] = useState(filters.range_end ?? max);
  const minValueRef = useRef<HTMLInputElement>(null);
  const maxValueRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLInputElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValueRef.current) {
      const minPercent = getPercent(minValue);
      const maxPercent = getPercent(+maxValueRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minValue, getPercent]);

  useEffect(() => {
    if (minValueRef.current) {
      const minPercent = getPercent(+minValueRef.current.value);
      const maxPercent = getPercent(maxValue);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxValue, getPercent]);

  const setAfterDebounce = useDebouncedCallback((event, value) => {
    onChange(event, value);
  }, 500);

  return (
    <div className="m-3">
      <input
        type="range"
        name="range_start"
        min={min}
        max={max}
        value={minValue}
        ref={minValueRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxValue - 1);
          setMinValue(value);
          event.target.value = value.toString();
          setAfterDebounce(event, value === min)
        }}
        className={cn("thumb thumb-zindex-3", {
          "thumb-zindex-5": minValue > max - 100
        })}
      />
      <input
        type="range"
        name="range_end"
        min={min}
        max={max}
        value={maxValue}
        ref={maxValueRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minValue + 1);
          setMaxValue(value);
          event.target.value = value.toString();
          setAfterDebounce(event, value === max)
        }}
        className="thumb thumb-zindex-4"
      />

      <div className="slider">
        <div className="slider-track"/>
        <div ref={range} className="slider-range"/>
      </div>
    </div>
  );
}
