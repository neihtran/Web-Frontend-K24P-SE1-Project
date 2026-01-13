'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { billingSchema, BillingFormValues } from "./schema";
import { Button } from "../ui/button";

export default function BillingForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BillingFormValues>({
    resolver: zodResolver(billingSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      country: "us",
    },
  });

  const onSubmit = (data: BillingFormValues) => {
    alert("Đặt hàng thành công!");
  };

  return (
    <form id="billing-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-xl font-semibold">Billing Details</h2>

      {/* Country */}
      <div>
        <label className="block mb-1 text-sm font-medium">
          Country <span className="text-red-500">*</span>
        </label>

        <Select
          defaultValue="us"
          onValueChange={(v) => setValue("country", v)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="vn">Vietnam</SelectItem>
          </SelectContent>
        </Select>

        {errors.country && (
          <p className="text-red-500 text-sm mt-1">
            {errors.country.message}
          </p>
        )}
      </div>

      {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input placeholder="First name *" {...register("firstName")} />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <Input placeholder="Last name *" {...register("lastName")} />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

      <div>
        <Input
          placeholder="Street address *"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">
            {errors.address.message}
          </p>
        )}
      </div>

      <Input placeholder="Street address *" {...register("address")} />
      <Input placeholder="Apartment, suite, unit (optional)" {...register("apartment")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input placeholder="Town / City *" {...register("city")} />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">
              {errors.city.message}
            </p>
          )}
        </div>

        <div>
          <Input placeholder="State / County *" {...register("state")} />
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">
              {errors.state.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input placeholder="Postcode / Zip *" {...register("zip")} />
          {errors.zip && (
            <p className="text-red-500 text-sm mt-1">
              {errors.zip.message}
            </p>
          )}
        </div>

        <div>
          <Input placeholder="Phone *" {...register("phone")} />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Input placeholder="Email address *" {...register("email")} />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Options */}
      <div className="flex items-center gap-2">
        <Checkbox id="create-account" />
        <label htmlFor="create-account" className="text-sm">
          Create an account?
        </label>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="ship-different" />
        <label htmlFor="ship-different" className="text-sm">
          Ship to a different address?
        </label>
      </div>
      
      <Button
        type="submit"
        id="billing-submit"
        className="hidden"
      >
        Submit
      </Button>

      <Textarea placeholder="Order notes (optional)" {...register("notes")} />
    </form>
  );
}
