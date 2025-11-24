import React from "react";
import { BadgeProps } from "./Badge.types";
import "./badge.css";

export const Badge: React.FC<BadgeProps> = ({
  content,
  variant = "neutral",
}) => {
  return <span className={`badge ${variant}`}>{content}</span>;
};
