import React, { ReactNode, useState, useEffect } from "react";
import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

const tooltipVariants = cva(
  "absolute z-50 px-3 py-1.5 text-sm rounded-md shadow-md transition-all duration-200 pointer-events-none whitespace-nowrap",
  {
    variants: {
      position: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
      },
      variant: {
        dark: "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900",
        light: "bg-white text-gray-900 border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700",
        info: "bg-blue-600 text-white",
      },
    },
    defaultVariants: {
      position: "top",
      variant: "dark",
    },
  }
);

export interface TooltipProps extends VariantProps<typeof tooltipVariants> {
  content: ReactNode;
  children: ReactNode;
  delay?: number;
  className?: string;
}

const Tooltip = ({
  content,
  children,
  position,
  variant,
  delay = 200,
  className,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    const id = setTimeout(() => setIsVisible(true), delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <div
      className="relative inline-flex items-center justify-center"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      <div
        className={cn(
          tooltipVariants({ position, variant }),
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
          className
        )}
        role="tooltip"
      >
        {content}
      </div>
    </div>
  );
};

export { Tooltip, tooltipVariants };
