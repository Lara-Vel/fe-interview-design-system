import { TabVariant } from "./Tabs.types";

export const getTabClassName = (variant: TabVariant, isSelected: boolean) =>
  [
    "tabs__tab",
    variant === "pill" ? "tabs__tab--pill" : "tabs__tab--underline",
    isSelected ? "tabs__tab--selected" : "",
  ]
    .filter(Boolean)
    .join(" ");

export const getNextIndex = (
  length: number,
  start: number,
  dir: 1 | -1
): number => (start + dir + length) % length;
