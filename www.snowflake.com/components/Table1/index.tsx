import * as React from "react";
import { cn } from "@/lib/utils";
import { table1Variants, type Table1Variants } from "./variants";

/**
 * Table1
 * 
 * Extracted from source site.
 * Original structure:
 * <table>
<thead><tr><th># Metric</th>
<th>Mean</th>
<th>Median</th>
<th>Top 90%</th>
</tr></thead><tbody><tr><td>Database tables</td>
<td>18.5</td>
<td>18.0</td>
<td>25.0</td>
</tr><tr><td>Sample data 
 * 
 * Observed on: https://www.snowflake.com/en/engineering-blog/agent-world-model-for-agentic-reinforment-learning
 * Usage count: 2x
 */
export interface Table1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Table1Variants {}

export const Table1 = React.forwardRef<HTMLDivElement, Table1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(table1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Table1.displayName = "Table1";
