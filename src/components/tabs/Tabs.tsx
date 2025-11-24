import React, { useState, useId } from "react";
import "./tabs.css";
import {Badge} from "../badge/Badge";
import { TabsProps, Tab } from "./Tabs.types";
import { getTabClassName, getNextIndex } from "./Tabs.helpers";

export const Tabs: React.FC<TabsProps> = ({ tabs, variant = "pill" }) => {
  const [activeTab, setActiveTab] = useState(0);
  const idBase = useId();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const { key } = e;

    if (key === "ArrowRight") {
      e.preventDefault();
      return setActiveTab(getNextIndex(tabs.length, activeTab, 1));
    }
    if (key === "ArrowLeft") {
      e.preventDefault();
      return setActiveTab(getNextIndex(tabs.length, activeTab, -1));
    }
    if (key === "Home") {
      e.preventDefault();
      return setActiveTab(0);
    }
    if (key === "End") {
      e.preventDefault();
      return setActiveTab(tabs.length - 1);
    }
  };

  const renderTab = (tab: Tab, i: number, isSelected: boolean) => (
    <button
      key={`${tab.label}-${i}`}
      type="button"
      role="tab"
      id={`tab-${idBase}-${i}`}
      aria-controls={`panel-${idBase}-${i}`}
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      className={getTabClassName(variant, isSelected)}
      onClick={() => setActiveTab(i)}
    >
      <span className="tabs__tab-label">{tab.label}</span>
      {tab.badge && <Badge content={tab.badge} variant={tab.badgeVariant} />}
    </button>
  );

  return (
    <div className="tabs">
      <div
        role="tablist"
        className={`tabs__list tabs__list--${variant}`}
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab, i) => renderTab(tab, i, activeTab === i))}
      </div>
      {tabs.map((tab, i) => {
        const isSelected = activeTab === i;
        return (
          <div
            key={`panel-${i}`}
            className="tabs__tabpanel"
            role="tabpanel"
            id={`panel-${idBase}-${i}`}
            aria-labelledby={`tab-${idBase}-${i}`}
            hidden={!isSelected}
          >
            {isSelected ? tab.content : null}
          </div>
        );
      })}
    </div>
  );
};
