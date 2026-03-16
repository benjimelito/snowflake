import * as React from "react";
import { cn } from "@/lib/utils";
import { nav2Variants, type Nav2Variants } from "./variants";

/**
 * Nav2
 * 
 * Extracted from source site.
 * Original structure:
 * <nav data-testid="snowflake-sub-navigation" class="snowflake-sub-navigation"><div class="snowflake-sub-navigation-content snowflake-container"><a data-testid="button-internal" role="button" class="sno
 * 
 * Observed on: https://www.snowflake.com/en/blog/build-manage-production-ml-snowflake-feature-store, https://www.snowflake.com/en/blog/retail-2026-predictions-webinar-recap, https://www.snowflake.com/en/blog/introducing-unistore
 * Usage count: 3x
 */
export interface Nav2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Nav2Variants {}

export const Nav2 = React.forwardRef<HTMLDivElement, Nav2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(nav2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Nav2.displayName = "Nav2";
