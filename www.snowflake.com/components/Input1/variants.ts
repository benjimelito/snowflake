import { cva, type VariantProps } from "class-variance-authority";

/**
 * Input1 Variants
 * Extracted from: https://www.snowflake.com/en/engineering-blog/agent-world-model-for-agentic-reinforment-learning, https://www.snowflake.com/en/blog/build-manage-production-ml-snowflake-feature-store, https://www.snowflake.com/en/blog/retail-2026-predictions-webinar-recap, https://www.snowflake.com/en/fundamentals/query-optimization, https://www.snowflake.com/en/blog/introducing-unistore
 * Usage count: 9x
 */
export const input1Variants = cva(
  // Base styles observed
  "mktoField mktoEmailField mktoHasWidth mktoRequired",
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

export type Input1Variants = VariantProps<typeof input1Variants>;
