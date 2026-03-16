import * as React from "react";
import { cn } from "@/lib/utils";
import { card2Variants, type Card2Variants } from "./variants";

/**
 * Card2
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="snowflake-mega-nav-nav-promo-card-content"><div class="snowflake-mega-nav-nav-promo-card-info-content"><span data-testid="snowflake-mega-nav-nav-promo-card-headline" class="snowflake-typog
 * 
 * Observed on: https://www.snowflake.com/en/engineering-blog/agent-world-model-for-agentic-reinforment-learning, https://www.snowflake.com/en/blog/build-manage-production-ml-snowflake-feature-store, https://www.snowflake.com/en/blog/retail-2026-predictions-webinar-recap, https://www.snowflake.com/en/fundamentals/query-optimization, https://www.snowflake.com/en/blog/introducing-unistore
 * Usage count: 5x
 */
export interface Card2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card2Variants {}

export const Card2 = React.forwardRef<HTMLDivElement, Card2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card2.displayName = "Card2";
