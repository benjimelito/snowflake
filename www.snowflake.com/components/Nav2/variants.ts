import { cva, type VariantProps } from "class-variance-authority";

/**
 * Nav2 Variants
 * Extracted from: https://www.snowflake.com/en/blog/build-manage-production-ml-snowflake-feature-store, https://www.snowflake.com/en/blog/retail-2026-predictions-webinar-recap, https://www.snowflake.com/en/blog/introducing-unistore
 * Usage count: 3x
 */
export const nav2Variants = cva(
  // Base styles observed
  "snowflake-sub-navigation",
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

export type Nav2Variants = VariantProps<typeof nav2Variants>;
