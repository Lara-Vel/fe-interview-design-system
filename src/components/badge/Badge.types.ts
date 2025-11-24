export type BadgeVariant = "neutral" | "positive" | "negative";

export interface BadgeProps {
  content: string;
  variant?: BadgeVariant;
}
