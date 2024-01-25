import React, { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";
import './DoubleRangeSlider.css'

type DoubleRangeSliderType = {
  min: number,
  max: number,
  onChange: Function
};

export default function DoubleRangeSlider({ min, max, onChange }: DoubleRangeSliderType) {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const minValueRef = useRef<HTMLInputElement>(null);
  const maxValueRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLInputElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValueRef.current) {
      const minPercent = getPercent(minValue);
      const maxPercent = getPercent(+maxValueRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minValue, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValueRef.current) {
      const minPercent = getPercent(+minValueRef.current.value);
      const maxPercent = getPercent(maxValue);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxValue, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minValue, max: maxValue });
  }, [minValue, maxValue, onChange]);

  return (
    <div className="m-3">
      <input
        type="range"
        min={min}
        max={max}
        value={minValue}
        ref={minValueRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxValue - 1);
          setMinValue(value);
          event.target.value = value.toString();
        }}
        className={cn("thumb thumb-zindex-3", {
          "thumb-zindex-5": minValue > max - 100
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxValue}
        ref={maxValueRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minValue + 1);
          setMaxValue(value);
          event.target.value = value.toString();
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
