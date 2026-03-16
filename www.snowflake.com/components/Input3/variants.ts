import { cva, type VariantProps } from "class-variance-authority";

/**
 * Input3 Variants
 * Extracted from: https://www.snowflake.com/en/fundamentals/query-optimization
 * Usage count: 1x
 */
export const input3Variants = cva(
  // Base styles observed
  "mktoField",
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

export type Input3Variants = VariantProps<typeof input3Variants>;
