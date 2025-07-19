"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Stepper, { Step } from "../ui/stepper";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ErrorMessage, LabelInputContainer } from "../shared/ContactForm";
import { wait } from "@/lib/utils";
import { PuppyApplication, puppyApplicationSchema } from "@/lib/puppySchema";
import z from "zod";
import { useMemo } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "../ui/checkbox";

interface PuppyFormProps {
  defaultValues?: Partial<PuppyApplication>;
}


export default function PuppyApplicationForm({
  defaultValues,
}: PuppyFormProps) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<z.infer<typeof puppyApplicationSchema>>({
    resolver: zodResolver(puppyApplicationSchema),
    defaultValues: {
      agreement: false,
      ...defaultValues,
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  //   const hadBefore = watch("hadPetBefore");
  //   const didTrain = watch("hasTrainingExperience");

  // Create dynamic stepFields based on current form values
  const stepFields = useMemo(() => {
    const baseSteps = [
      [], // Step 1 - Welcome
      [
        "fullName",
        "email",
        "phone",
        "age",
        "address.street",
        "address.city",
        "address.state",
        "address.zip",
        "address.country",
      ], // Step 2
      [
        "homeType",
        "ownOrRent",
        "hasFence",
        "fenceHeight",
        "adultsInHome",
        "childrenInHome",
      ], // Step 3
      //   [
      //     "hadPetBefore",
      //     // Only include conditional fields if hadPetBefore is "Yes"
      //     ...(hadBefore === "Yes"
      //       ? [
      //           "currentPets",
      //           "previousPetsExperience",
      //           "hasTrainingExperience",
      //           // Only validate training experience if they said "Yes"
      //           ...(didTrain === "Yes" ? ["trainingExperience"] : []),
      //         ]
      //       : []),
      //   ],
      // Step 4
      [
        "puppyPurpose",
        "preferredSex",
        "preferredColor",
        "preferredTemperament",
        "plannedTraining",
      ], // Step 5
      [
        // "dailyAloneTime", "exercisePlan", "financialPreparedness",
        "agreement",
      ], // Step 6
    ];

    return baseSteps;
  }, []);

  const onSubmit = async (data: PuppyApplication) => {
    console.log("Application submitted:", data);
    await wait(1500);
    reset();
  };

  return (
    <form className="rounded-md" onSubmit={handleSubmit(onSubmit)}>
      <Stepper
        isSubmitting={isSubmitting}
        isSubmitSuccessful={isSubmitSuccessful}
        backButtonText="Previous"
        nextButtonText="Next"
        onReset={() => reset()}
        stepFields={stepFields}
        trigger={trigger}
        errors={errors}
      >
        {/* Step 1 - Welcome */}
        <Step>
          <div className="space-y-6 text-center">
            <h2 className=" text-2xl md:text-4xl border-b py-6 border-primary-accent">
              <span className="font-semibold">Welcome to Our</span> <br />{" "}
              <span className="font-semibold text-primary-accent">
                Puppy Application
              </span>
            </h2>
            <p className="text-paragraph">
              We&apos;re so excited you&apos;re interested in one of our
              puppies! This application helps us ensure our puppies go to
              loving, responsible homes.
            </p>
            <div className="text-center">
              <p className="font-semibold">
                We ask for detailed information because:
              </p>
              <ul className="list-disc my-4 space-y-2 w-fit mx-auto">
                <li>We want to match each puppy with the perfect family</li>
                <li>
                  We need to ensure you&apos;re prepared for puppy ownership
                </li>
                <li>
                  We&apos;re committed to the lifelong wellbeing of our puppies
                </li>
              </ul>
              <p className="italic mt-3 text-sm text-primary-accent">
                This process typically takes about 10-15 minutes.
              </p>
            </div>
          </div>
        </Step>

        {/* Step 2 - Applicant Information */}
        <Step>
          <div className="space-y-4">
            <h3 className="text-2xl  py-6 border-primary-accent">
              <span className="font-semibold">Personal</span>{" "}
              <span className="font-semibold text-primary-accent">
                Information
              </span>
            </h3>

            <LabelInputContainer>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                placeholder="Your full name"
                {...register("fullName")}
              />
              <ErrorMessage>{errors.fullName?.message}</ErrorMessage>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                placeholder="your.email@example.com"
                type="email"
                {...register("email")}
              />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                placeholder="+1 (555) 123-4567"
                type="tel"
                {...register("phone")}
              />
              <ErrorMessage>{errors.phone?.message}</ErrorMessage>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="age">Your Age *</Label>
              <Input
                id="age"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                {...register("age")}
              />
              <ErrorMessage>{errors.age?.message}</ErrorMessage>
            </LabelInputContainer>

            <div className="space-y-4 mt-6">
              <h4 className="text-2xl  py-6 border-primary-accent">
                <span className="font-semibold">Your</span>{" "}
                <span className="font-semibold text-primary-accent">
                  Address
                </span>
              </h4>

              <LabelInputContainer>
                <Label htmlFor="address.street">Street Address *</Label>
                <Input
                  id="address.street"
                  placeholder="123 Main St"
                  {...register("address.street")}
                />
                <ErrorMessage>{errors.address?.street?.message}</ErrorMessage>
              </LabelInputContainer>

              <div className="grid grid-cols-2 gap-4">
                <LabelInputContainer>
                  <Label htmlFor="address.city">City *</Label>
                  <Input
                    id="address.city"
                    placeholder="City"
                    {...register("address.city")}
                  />
                  <ErrorMessage>{errors.address?.city?.message}</ErrorMessage>
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="address.state">State *</Label>
                  <Input
                    id="address.state"
                    placeholder="State"
                    {...register("address.state")}
                  />
                  <ErrorMessage>{errors.address?.state?.message}</ErrorMessage>
                </LabelInputContainer>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <LabelInputContainer>
                  <Label htmlFor="address.zip">ZIP Code *</Label>
                  <Input
                    id="address.zip"
                    placeholder="ZIP"
                    {...register("address.zip")}
                  />
                  <ErrorMessage>{errors.address?.zip?.message}</ErrorMessage>
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="address.country">Country *</Label>
                  <Input
                    id="address.country"
                    placeholder="Country"
                    {...register("address.country")}
                  />
                  <ErrorMessage>
                    {errors.address?.country?.message}
                  </ErrorMessage>
                </LabelInputContainer>
              </div>
            </div>
          </div>
        </Step>

        {/* Step 3 - Household Information */}
        <Step>
          <div className="space-y-6">
            <h3 className="text-2xl  py-6 border-primary-accent">
              <span className="font-semibold">Household</span>{" "}
              <span className="font-semibold text-primary-accent">
                Information
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LabelInputContainer>
                <Label>Type of Home *</Label>
                <Controller
                  control={control}
                  name="homeType"
                  defaultValue={""}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full p-2 border rounded">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="House">House</SelectItem>
                        <SelectItem value="Apartment">Apartment</SelectItem>
                        <SelectItem value="Condo">Condo</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                <ErrorMessage>{errors.homeType?.message}</ErrorMessage>
              </LabelInputContainer>

              <LabelInputContainer>
                <Label>Own or Rent? *</Label>
                <Controller
                  control={control}
                  name="ownOrRent"
                  defaultValue={""}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full p-2 border rounded">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="Own">Own</SelectItem>
                        <SelectItem value="Rent">Rent</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />

                <ErrorMessage>{errors.ownOrRent?.message}</ErrorMessage>
              </LabelInputContainer>
            </div>

            <LabelInputContainer>
              <Label>Do you have a fenced yard? *</Label>
              <Controller
                control={control}
                name="hasFence"
                defaultValue={""}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full p-2 border rounded">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />

              <ErrorMessage>{errors.hasFence?.message}</ErrorMessage>
            </LabelInputContainer>

            {watch("hasFence") === "Yes" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <LabelInputContainer>
                  <Label>Fence Height (optional)</Label>
                  <Input
                    placeholder="Height in feet"
                    {...register("fenceHeight")}
                  />
                  <ErrorMessage>{errors.fenceHeight?.message}</ErrorMessage>
                </LabelInputContainer>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LabelInputContainer>
                <Label>Adults in Home *</Label>
                <Input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  {...register("adultsInHome")}
                />
                <ErrorMessage>{errors.adultsInHome?.message}</ErrorMessage>
              </LabelInputContainer>

              <LabelInputContainer>
                <Label>Children in Home (optional)</Label>
                <Input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  {...register("childrenInHome")}
                  min="0"
                />
                <ErrorMessage>{errors.childrenInHome?.message}</ErrorMessage>
              </LabelInputContainer>
            </div>
          </div>
        </Step>

        {/* Step 4 - Pet Experience */}

        {/*  <Step>
          <div className="space-y-6">
            <h3 className="text-2xl mb-6  pb-2 border-primary-accent">
              <span className="font-semibold">Previous</span>{" "}
              <span className="font-semibold text-primary-accent">Pets</span>
            </h3>
            <LabelInputContainer>
              <Label>Have you owned a pet before? *</Label>
              <Controller
                control={control}
                name="hadPetBefore"
                defaultValue={""}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full p-2 border rounded">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />

              <ErrorMessage>{errors.hadPetBefore?.message}</ErrorMessage>
            </LabelInputContainer>

            {hadBefore === "Yes" && (
              <>
                <LabelInputContainer>
                  <Label>Do you currently have any pets? *</Label>
                  <Textarea {...register("currentPets")} />
                  <ErrorMessage>{errors.currentPets?.message}</ErrorMessage>
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label>Your previous pet experience *</Label>
                  <Textarea {...register("previousPetsExperience")} />
                  <ErrorMessage>
                    {errors.previousPetsExperience?.message}
                  </ErrorMessage>
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label>Have you ever trained a dog before? *</Label>
                  <Controller
                    control={control}
                    name="hasTrainingExperience"
                    defaultValue={""}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full p-2 border rounded">
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />

                  <ErrorMessage>
                    {errors.hasTrainingExperience?.message}
                  </ErrorMessage>
                </LabelInputContainer>

                {didTrain === "Yes" && (
                  <LabelInputContainer>
                    <Label>Describe your training background *</Label>
                    <Textarea {...register("trainingExperience")} />
                    <ErrorMessage>
                      {errors.trainingExperience?.message}
                    </ErrorMessage>
                  </LabelInputContainer>
                )}

             
                <div className="grid grid-cols-2 gap-4">
                  <LabelInputContainer>
                    <Label>Veterinary clinic name (optional)</Label>
                    <Input {...register("vetInfo.name")} />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label>Veterinary phone (optional)</Label>
                    <Input {...register("vetInfo.phone")} type="tel" />
                  </LabelInputContainer>
                </div>
              </>
            )}
          </div>
        </Step> */}

        {/* Step 5 - Puppy Preferences */}
        <Step>
          <div className="space-y-6">
            <h3 className="text-2xl mb-6  py-6 border-primary-accent">
              <span className="font-semibold">Puppy</span>{" "}
              <span className="font-semibold text-primary-accent">
                Preferences
              </span>
            </h3>

            <LabelInputContainer>
              <Label>Main purpose for adoption *</Label>
              <Controller
                name="puppyPurpose"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <Select
                    onValueChange={(v) => field.onChange(v)}
                    value={field.value}
                  >
                    <SelectTrigger className="w-full p-2 border rounded">
                      <SelectValue placeholder="Select purpose…" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Companion">Companion</SelectItem>
                      <SelectItem value="Show">Show</SelectItem>
                      <SelectItem value="Breeding">Breeding</SelectItem>
                      <SelectItem value="Service">Service</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              <ErrorMessage>{errors.puppyPurpose?.message}</ErrorMessage>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label>Preferred Sex *</Label>
              <Controller
                control={control}
                name="preferredSex"
                defaultValue={""}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full p-2 border rounded">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="No Preference">
                        No Preference
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />

              <ErrorMessage>{errors.preferredSex?.message}</ErrorMessage>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label>Preferred Color (optional)</Label>
              <Input
                {...register("preferredColor")}
                placeholder="What color are you looking for?"
              />
              <ErrorMessage>{errors.preferredColor?.message}</ErrorMessage>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label>Preferred Temperament (optional)</Label>
              <Textarea
                {...register("preferredTemperament")}
                placeholder="e.g. Playful, Calm…"
                className="min-h-[100px]"
              />
              <ErrorMessage>
                {errors.preferredTemperament?.message}
              </ErrorMessage>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label>Planned Training *</Label>
              <Textarea
                {...register("plannedTraining")}
                placeholder="How do you plan to train your puppy?"
                className="min-h-[100px]"
              />
              <ErrorMessage>{errors.plannedTraining?.message}</ErrorMessage>
            </LabelInputContainer>
          </div>
        </Step>

        {/* Step 6 - Commitment */}
        <Step>
          <div className="space-y-6 text-center py-8">
            <h3 className="text-2xl py-6 font-semibold text-primary-accent">
              You’re Almost There!
            </h3>
            <p className="text-gray-700">
              Thank you for taking the time to fill out our application. We’ll
              review your responses and be in touch soon about matching you with
              the perfect puppy.
            </p>

            <LabelInputContainer>
              <div className="flex items-start justify-center space-x-2">
                {/* ← use Controller, not register */}
                <Controller
                  name="agreement"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="agreement"
                      className=" size-6 rounded border-gray-300 text-primary-accent focus:ring-primary-accent"
                    />
                  )}
                />

                <Label htmlFor="agreement" className="text-left">
                  I agree to provide a loving, responsible home for this puppy *
                </Label>
              </div>
              <ErrorMessage>{errors.agreement?.message}</ErrorMessage>
            </LabelInputContainer>
          </div>
        </Step>
      </Stepper>
    </form>
  );
}
