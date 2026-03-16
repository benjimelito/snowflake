import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button1 Variants
 * Extracted from: https://www.snowflake.com/en/engineering-blog/agent-world-model-for-agentic-reinforment-learning, https://www.snowflake.com/en/blog/build-manage-production-ml-snowflake-feature-store, https://www.snowflake.com/en/blog/introducing-unistore
 * Usage count: 8x
 */
export const button1Variants = cva(
  // Base styles observed
  "copy-to-clipboard-button",
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

export type Button1Variants = VariantProps<typeof button1Variants>;
