import { cva, type VariantProps } from "class-variance-authority";

/**
 * Card2 Variants
 * Extracted from: https://www.snowflake.com/en/engineering-blog/agent-world-model-for-agentic-reinforment-learning, https://www.snowflake.com/en/blog/build-manage-production-ml-snowflake-feature-store, https://www.snowflake.com/en/blog/retail-2026-predictions-webinar-recap, https://www.snowflake.com/en/fundamentals/query-optimization, https://www.snowflake.com/en/blog/introducing-unistore
 * Usage count: 5x
 */
export const card2Variants = cva(
  // Base styles observed
  "snowflake-mega-nav-nav-promo-card-content",
  {
    variants: {
      variant: {
        default: "",
        // Add more variants based on observed patterns
      },
      size: {
        default: "",
        // Add size variants if detected
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type Card2Variants = VariantProps<typeof card2Variants>;
