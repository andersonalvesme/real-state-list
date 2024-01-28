'use client'

import Button from "@/components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import cn from "classnames";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";

type Inputs = {
  full_name: string;
  email: string;
  phone: number;
  comments: string;
};

const schema = yup.object({
  full_name: yup
    .string()
    .required("Full Name is required"),
  email: yup
    .string()
    .required("Email is required").email("Email invalid"),
  phone: yup
    .number()
    .transform(value => isNaN(value) ? undefined : value)
    .required("Phone is required"),
  comments: yup
    .string()
    .required("Comments is required")
})

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })
  const onSubmit: SubmitHandler<Inputs> = data => {
    toast.success('Message sent successfully')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border bg-gray-200 rounded p-3 flex flex-col gap-4">
      <h2 className="text-center text-lg">Contact Agent</h2>

      <div>
        <input
          type="text"
          placeholder="Full Name *"
          className={cn("w-full p-2 rounded border border-slate-300 focus:outline-none", {
            'border-red-500': errors.full_name
          })}
          {...register('full_name')}
        />
        {errors.full_name && <small className="text-red-500">{errors.full_name.message}</small>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Email *"
          className={cn("w-full p-2 rounded border border-slate-300 focus:outline-none", {
            'border-red-500': errors.email
          })}
          {...register('email', { required: true })}
        />
        {errors.email && <small className="text-red-500">{errors.email.message}</small>}
      </div>

      <div>
        <input
          type="number"
          placeholder="Phone Number *"
          className={cn("w-full p-2 rounded border border-slate-300 focus:outline-none", {
            'border-red-500': errors.phone
          })}
          {...register('phone', { required: true })}
        />
        {errors.phone && <small className="text-red-500">{errors.phone.message}</small>}
      </div>

      <div>
        <textarea
          placeholder="Comments *"
          className={cn("w-full p-2 rounded border border-slate-300 focus:outline-none", {
            'border-red-500': errors.comments
          })}
          {...register('comments', { required: true })}
        />
        {errors.comments && <small className="text-red-500">{errors.comments.message}</small>}
      </div>

      <Button type="submit" size="md">Contact Now</Button>
    </form>
  )
}
