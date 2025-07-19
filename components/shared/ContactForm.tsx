"use client";

import type React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import { cn, wait } from "@/lib/utils";

import { FadeIn } from "../shared/FadeIn";




import { Input } from "../ui/input";
import { contactFormSchema, TContactFormSchema } from "@/lib/contactSchema";
import StatusButton from "../ui/status-button";

// Props interface for reusability
interface ContactFormProps {
  defaultValues?: Partial<TContactFormSchema>;
  className?: string;
}



export default function ContactForm({
  defaultValues,
  className,
}: ContactFormProps) {
  

  // Initialize React Hook Form with Zod resolver
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting, isSubmitSuccessful  },
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema()),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      ...defaultValues,
    },
  });

  // Form submission handler
  const onSubmit = async (data: TContactFormSchema) => {
    console.log(data);
    await wait(1500);
    reset();
  };

  return (
    <div
      className={cn(
        "shadow-input mx-auto w-full  rounded-none bg-white md:rounded-2xl  ",
        className
      )}
    >
      <FadeIn>
        <form
          className=" relative shadow-2xl p-4 md:p-16 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
              disabled={isSubmitting}
                id="firstName"
                placeholder={"Your first name"}
                {...register("firstName")}
              />
              <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
               disabled={isSubmitting}
                id="lastName"
                placeholder="Your last name"
                {...register("lastName")}
              />
              <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
            </LabelInputContainer>
          </div>

          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer className="mb-4">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
               disabled={isSubmitting}
                id="phone"
                placeholder="+1 (555) 123-4567"
                type="tel"
                {...register("phone")}
              />
              <ErrorMessage>{errors.phone?.message}</ErrorMessage>
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email *</Label>
              <Input
               disabled={isSubmitting}
                id="email"
                placeholder="john.doe@gmail.com"
                type="email"
                {...register("email")}
              />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Message *</Label>
            <Textarea
             disabled={isSubmitting}
              id="message"
              placeholder="How can we help you?"
              className="min-h-[120px] resize-y"
              {...register("message")}
            />
            <ErrorMessage>{errors.message?.message}</ErrorMessage>
          </LabelInputContainer>

          <StatusButton
          onReset={() => reset()}
           isSubmitting={isSubmitting} 
            isSubmitSuccessful={isSubmitSuccessful}
          />
        </form>
      </FadeIn>
    </div>
  );
}



export const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("pb-1 flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

// Error message component with fixed height to prevent layout shifts
export const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-[20px] text-xs text-rose-500 ">{children}</div>;
};
