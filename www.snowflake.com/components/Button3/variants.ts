import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button3 Variants
 * Extracted from: https://www.snowflake.com/en/blog/retail-2026-predictions-webinar-recap, https://www.snowflake.com/en/fundamentals/query-optimization
 * Usage count: 2x
 */
export const button3Variants = cva(
  // Base styles observed
  "ot-sdk-show-settings",
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

export type Button3Variants = VariantProps<typeof button3Variants>;
