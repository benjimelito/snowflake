import * as React from "react";
import { cn } from "@/lib/utils";
import { nav1Variants, type Nav1Variants } from "./variants";

/**
 * Nav1
 * 
 * Extracted from source site.
 * Original structure:
 * <nav class="snowflake-mega-nav-header-inner" data-testid="snowflake-mega-nav-header-inner" style="top: 0px;"><div class="snowflake-mega-nav-header-navigation-container"><div class="logo-container snow
 * 
 * Observed on: https://www.snowflake.com/en/engineering-blog/agent-world-model-for-agentic-reinforment-learning, https://www.snowflake.com/en/blog/build-manage-production-ml-snowflake-feature-store, https://www.snowflake.com/en/blog/retail-2026-predictions-webinar-recap, https://www.snowflake.com/en/fundamentals/query-optimization, https://www.snowflake.com/en/blog/introducing-unistore
 * Usage count: 5x
 */
export interface Nav1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Nav1Variants {}

export const Nav1 = React.forwardRef<HTMLDivElement, Nav1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(nav1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Nav1.displayName = "Nav1";
