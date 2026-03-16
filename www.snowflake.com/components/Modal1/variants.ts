import { cva, type VariantProps } from "class-variance-authority";

/**
 * Modal1 Variants
 * Extracted from: https://www.snowflake.com/en/fundamentals/query-optimization
 * Usage count: 1x
 */
export const modal1Variants = cva(
  // Base styles observed
  "snowflake-modal-window-container",
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

export type Modal1Variants = VariantProps<typeof modal1Variants>;
