import * as React from "react";
import { cn } from "@/lib/utils";
import { button1Variants, type Button1Variants } from "./variants";

/**
 * Button1
 * 
 * Extracted from source site.
 * Original structure:
 * <button class="copy-to-clipboard-button" type="button" data-copy-state="copy"><span>Copy</span></button>
 * 
 * Observed on: https://www.snowflake.com/en/engineering-blog/agent-world-model-for-agentic-reinforment-learning, https://www.snowflake.com/en/blog/build-manage-production-ml-snowflake-feature-store, https://www.snowflake.com/en/blog/introducing-unistore
 * Usage count: 8x
 */
export interface Button1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Button1Variants {}

export const Button1 = React.forwardRef<HTMLDivElement, Button1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(button1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button1.displayName = "Button1";
