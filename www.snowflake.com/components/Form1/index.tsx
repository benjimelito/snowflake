import * as React from "react";
import { cn } from "@/lib/utils";
import { form1Variants, type Form1Variants } from "./variants";

/**
 * Form1
 * 
 * Extracted from source site.
 * Original structure:
 * <form class="snowflake-marketo-form mktoForm mktoHasWidth mktoLayoutLeft" data-testid="snowflake-marketo-form" id="mktoForm_3320" novalidate="novalidate" style="font-family: Helvetica, Arial, sans-ser
 * 
 * Observed on: https://www.snowflake.com/en/engineering-blog/agent-world-model-for-agentic-reinforment-learning, https://www.snowflake.com/en/blog/build-manage-production-ml-snowflake-feature-store, https://www.snowflake.com/en/blog/retail-2026-predictions-webinar-recap, https://www.snowflake.com/en/fundamentals/query-optimization, https://www.snowflake.com/en/blog/introducing-unistore
 * Usage count: 14x
 */
export interface Form1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Form1Variants {}

export const Form1 = React.forwardRef<HTMLDivElement, Form1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(form1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Form1.displayName = "Form1";
