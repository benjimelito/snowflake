import * as React from "react";
import { cn } from "@/lib/utils";
import { input1Variants, type Input1Variants } from "./variants";

/**
 * Input1
 * 
 * Extracted from source site.
 * Original structure:
 * <input id="Email" name="Email" placeholder="Email Address  " maxlength="255" aria-labelledby="LblEmail InstructEmail" type="email" class="mktoField mktoEmailField mktoHasWidth mktoRequired" aria-requi
 * 
 * Observed on: https://www.snowflake.com/en/engineering-blog/agent-world-model-for-agentic-reinforment-learning, https://www.snowflake.com/en/blog/build-manage-production-ml-snowflake-feature-store, https://www.snowflake.com/en/blog/retail-2026-predictions-webinar-recap, https://www.snowflake.com/en/fundamentals/query-optimization, https://www.snowflake.com/en/blog/introducing-unistore
 * Usage count: 9x
 */
export interface Input1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Input1Variants {}

export const Input1 = React.forwardRef<HTMLDivElement, Input1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(input1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Input1.displayName = "Input1";
