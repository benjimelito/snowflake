import * as React from "react";
import { cn } from "@/lib/utils";
import { button3Variants, type Button3Variants } from "./variants";

/**
 * Button3
 * 
 * Extracted from source site.
 * Original structure:
 * <button id="ot-sdk-btn" class="ot-sdk-show-settings">Cookie Settings</button>
 * 
 * Observed on: https://www.snowflake.com/en/blog/retail-2026-predictions-webinar-recap, https://www.snowflake.com/en/fundamentals/query-optimization
 * Usage count: 2x
 */
export interface Button3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Button3Variants {}

export const Button3 = React.forwardRef<HTMLDivElement, Button3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(button3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button3.displayName = "Button3";
