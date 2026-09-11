import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const inputVariants = cva(
  "w-full rounded-md focus:outline-none shadow-sm transition-all duration-150 placeholder:text-gray-400 border border-gray-300 dark:border-gray-600",
  {
    variants: {
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
      },
      tone: {
        default:
          "focus:ring-2 focus:ring-blue-400 focus:border-blue-400",
        error:
          "border-red-400 focus:ring-2 focus:ring-red-400 focus:border-red-400",
        success:
          "border-green-400 focus:ring-2 focus:ring-green-400 focus:border-green-400",
      },
      disabled: {
        true: "opacity-60 cursor-not-allowed",
      },
    },
    defaultVariants: {
      size: "md",
      tone: "default",
      disabled: false,
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "disabled">,
    VariantProps<typeof inputVariants> {
  label?: string;
  hint?: string;
  error?: string;
  id?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      className,
      size = "md",
      tone,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId =
      id ||
      React.useId?.() ||
      `input-${Math.random().toString(36).slice(2, 9)}`;
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium"
            style={{ color: "var(--text-color)" }}
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(inputVariants({ size, tone, disabled }), className)}
          style={{ backgroundColor: "transparent", color: "var(--text-color)" }}
          disabled={disabled}
          {...props}
        />
        {error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : hint ? (
          <p className="text-sm opacity-70" style={{ color: "var(--text-color)" }}>{hint}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input, inputVariants };
