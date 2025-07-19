"use client";
import React, {
  useState,
  Children,
  useRef,
  useLayoutEffect,
  HTMLAttributes,
  ReactNode,
  
} from "react";
import { m, AnimatePresence, Variants } from "framer-motion";
import StatusButton from "./status-button";

import { UseFormTrigger } from "react-hook-form";
import { PuppyApplication } from "@/lib/puppySchema";

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  onReset: () => void;
  stepFields?: string[][];
  trigger: UseFormTrigger<PuppyApplication>;
  errors: Partial<Record<keyof PuppyApplication, { message?: string }>>;
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  stepCircleContainerClassName?: string;
  stepContainerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  backButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  nextButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  backButtonText?: string;
  nextButtonText?: string;
  disableStepIndicators?: boolean;
  renderStepIndicator?: (props: {
    step: number;
    currentStep: number;
    onStepClick: (clicked: number) => void;
  }) => ReactNode;
}

export default function Stepper({
  children,
  isSubmitting,
  onReset,
  isSubmitSuccessful,
  stepFields = [],
  trigger,
  errors,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = "",
  stepContainerClassName = "",
  contentClassName = "",
  footerClassName = "",
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = "Back",
  nextButtonText = "Continue",
  disableStepIndicators = false,
  renderStepIndicator,
  ...rest
}: StepperProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const [attemptedNext, setAttemptedNext] = useState(false);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;
  const containerRef = useRef<HTMLDivElement>(null);

  

  const validateCurrentStep = async () => {
    if (!stepFields.length || currentStep > stepFields.length) return true;

    const fieldsToValidate = stepFields[
      currentStep - 1
    ] as (keyof PuppyApplication)[];
    setAttemptedNext(true);
    return await trigger(fieldsToValidate);
  };

 function scrollToFormTop() {
  containerRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

  const updateStep = (newStep: number) => {
    setCurrentStep(newStep);
    setAttemptedNext(false);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (!isValid) return;

    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
      scrollToFormTop();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
      scrollToFormTop();
    }
  };

  const onClickStep = async (clicked: number) => {
    if (clicked === currentStep) return;

    // Only allow navigation to previous steps
    if (clicked < currentStep) {
      setDirection(-1);
      updateStep(clicked);
    }
    // Completely ignore clicks on future steps
  };

  //   const handleComplete = () => {
  //     setDirection(1);
  //     updateStep(totalSteps + 1);
  //   };

  // Add this internal reset function
  const handleInternalReset = () => {
    setCurrentStep(1); // Reset to first step
    setAttemptedNext(false);
    onReset(); // Call the external reset function
  };

  // Check if current step has errors
  const currentStepHasErrors = () => {
    if (!stepFields.length || !attemptedNext) return false;
    const currentFields = stepFields[
      currentStep - 1
    ] as (keyof PuppyApplication)[];
    return currentFields.some((field) => errors[field]);
  };

  return (
    <div
    ref={containerRef}
      className="flex min-h-full flex-1 flex-col items-center justify-center scroll-mt-32"
      {...rest}
    >
      <div
        className={`mx-auto w-full max-w-3xl rounded-4xl md:shadow-xl ${stepCircleContainerClassName}`}
      >
        <div
          className={`${stepContainerClassName} flex w-full items-center px-2 py-4 sm:p-8`}
        >
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 1;
            return (
              <React.Fragment key={stepNumber}>
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step: stepNumber,
                    currentStep,
                    onStepClick: onClickStep,
                  })
                ) : (
                  <StepIndicator
                    step={stepNumber}
                    disableStepIndicators={disableStepIndicators}
                    currentStep={currentStep}
                    onClickStep={onClickStep}
                  />
                )}
                {isNotLastStep && (
                  <StepConnector isComplete={currentStep > stepNumber} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <StepContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
          className={`space-y-2 px-8 ${contentClassName}`}
        >
          {stepsArray[currentStep - 1]}
        </StepContentWrapper>

        {!isCompleted && (
          <div className={` px-1 md:px-8 pb-8  ${footerClassName}`}>
            <div className="min-h-[40px]">
              {currentStepHasErrors() && (
                <div className="my-4 text-sm text-red-500">
                  Please fix the errors before continuing to the next step.
                </div>
              )}
            </div>
            <div
              className={`mt-4 flex ${
                currentStep !== 1 ? "justify-between" : "justify-end"
              }`}
            >
              {currentStep !== 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className={`duration-350 cursor-pointer rounded px-4 py-2 transition ${
                    currentStep === 1
                      ? "pointer-events-none opacity-50"
                      : "text-neutral-700 hover:text-neutral-900"
                  }`}
                  {...backButtonProps}
                >
                  {backButtonText}
                </button>
              )}
              {isLastStep ? (
                <StatusButton
                  className="w-[200px]"
                  onReset={handleInternalReset}
                  isSubmitting={isSubmitting}
                  isSubmitSuccessful={isSubmitSuccessful}
                />
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="duration-350 text-md flex md:text-xl tracking-wider cursor-pointer items-center justify-center rounded-lg bg-primary-accent px-4 py-2 font-medium  text-white transition hover:bg-primary-accent-dark active:ring-2"
                  {...nextButtonProps}
                >
                  {nextButtonText}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface StepContentWrapperProps {
  isCompleted: boolean;
  currentStep: number;
  direction: number;
  children: ReactNode;
  className?: string;
}

function StepContentWrapper({
  isCompleted,
  currentStep,
  direction,
  children,

  className = "",
}: StepContentWrapperProps) {
  const [parentHeight, setParentHeight] = useState<number>(0);

  return (
    <m.div
      style={{ position: "relative", overflow: "hidden" }}
      animate={{ height: isCompleted ? 0 : parentHeight }}
      transition={{ type: "spring", duration: 0.4 }}
      className={className}
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        {!isCompleted && (
          <SlideTransition
            key={currentStep}
            direction={direction}
            onHeightReady={(h) => setParentHeight(h)}
          >
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </m.div>
  );
}

interface SlideTransitionProps {
  children: ReactNode;
  direction: number;
  onHeightReady: (height: number) => void;
}

function SlideTransition({
  children,
  direction,
  onHeightReady,
}: SlideTransitionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      onHeightReady(containerRef.current.offsetHeight);
    }
  }, [children, onHeightReady]);

  return (
    <m.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      style={{ position: "absolute", left: 0, right: 0, top: 0 }}
    >
      {children}
    </m.div>
  );
}

const stepVariants: Variants = {
  enter: (dir: number) => ({
    x: dir >= 0 ? "-100%" : "100%",
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir >= 0 ? "50%" : "-50%",
    opacity: 0,
  }),
};

interface StepProps {
  children: ReactNode;
}

export function Step({ children }: StepProps) {
  return <div className="px-1 md:px-8">{children}</div>;
}

interface StepIndicatorProps {
  step: number;
  currentStep: number;
  onClickStep: (clicked: number) => void;
  disableStepIndicators?: boolean;
}

function StepIndicator({
  step,
  currentStep,
  onClickStep,
  disableStepIndicators = false,
}: StepIndicatorProps) {
  const status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) {
      onClickStep(step);
    }
  };

  return (
    <m.div
      onClick={handleClick}
      className="relative cursor-pointer outline-none focus:outline-none"
      animate={status}
      initial={false}
    >
      <m.div
        variants={{
          inactive: { scale: 1, backgroundColor: "#f2f2f2", color: "#e26a2c" },
          active: { scale: 1, backgroundColor: "#f5c6a5", color: "#e26a2c" },
          complete: { scale: 1, backgroundColor: "#e26a2c", color: "#e26a2c" },
        }}
        transition={{ duration: 0.3 }}
        className="flex h-8 w-8 items-center justify-center rounded-full font-semibold"
      >
        {status === "complete" ? (
          <CheckIcon className="h-4 w-4 text-white" />
        ) : status === "active" ? (
          <div className="h-3 w-3 rounded-full bg-white" />
        ) : (
          <span className="text-sm">{step}</span>
        )}
      </m.div>
    </m.div>
  );
}

interface StepConnectorProps {
  isComplete: boolean;
}

function StepConnector({ isComplete }: StepConnectorProps) {
  const lineVariants: Variants = {
    incomplete: { width: 0, backgroundColor: "transparent" },
    complete: { width: "100%", backgroundColor: "#e26a2c" },
  };

  return (
    <div className="relative mx-2 h-0.5 flex-1 overflow-hidden rounded bg-neutral-600">
      <m.div
        className="absolute left-0 top-0 h-full"
        variants={lineVariants}
        initial={false}
        animate={isComplete ? "complete" : "incomplete"}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}

type CheckIconProps = React.SVGProps<SVGSVGElement>;

function CheckIcon(props: CheckIconProps) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <m.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.1,
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
