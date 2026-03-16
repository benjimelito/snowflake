import * as React from "react";
import { cn } from "@/lib/utils";
import { input3Variants, type Input3Variants } from "./variants";

/**
 * Input3
 * 
 * Extracted from source site.
 * Original structure:
 * <input name="adhoc1" id="adhoc1" type="checkbox" value="yes" aria-labelledby="Lbladhoc1 Instructadhoc1" class="mktoField">
 * 
 * Observed on: https://www.snowflake.com/en/fundamentals/query-optimization
 * Usage count: 1x
 */
export interface Input3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Input3Variants {}

export const Input3 = React.forwardRef<HTMLDivElement, Input3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(input3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Input3.displayName = "Input3";
