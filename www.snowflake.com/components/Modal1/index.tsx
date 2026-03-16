import * as React from "react";
import { cn } from "@/lib/utils";
import { modal1Variants, type Modal1Variants } from "./variants";

/**
 * Modal1
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="snowflake-modal-window-container" data-testid="snowflake-modal-window-container" id="container-a3f7d6067f">
 * 
 * Observed on: https://www.snowflake.com/en/fundamentals/query-optimization
 * Usage count: 1x
 */
export interface Modal1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Modal1Variants {}

export const Modal1 = React.forwardRef<HTMLDivElement, Modal1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(modal1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Modal1.displayName = "Modal1";
