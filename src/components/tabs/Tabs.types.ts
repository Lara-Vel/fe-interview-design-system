export type TabVariant = "pill" | "underline";

export interface Tab {
  label: string;
  content: string | React.ReactNode;
  badge?: string;
  badgeVariant?: "neutral" | "positive" | "negative";
}

export interface TabsProps {
  tabs: Tab[];
  variant?: TabVariant;
}
