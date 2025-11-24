import type { Tab } from "./components/tabs/Tabs.types";
import {Tabs} from "./components/tabs/Tabs";
import "./index.css";

const tabs: Tab[] = [
  {
    label: "Tab 1",
    content: "Tab 1 content",
    badge: "Normal",
    badgeVariant: "neutral",
  },
  {
    label: "Tab 2",
    content: "Tab 2 content",
    badge: "New",
    badgeVariant: "positive",
  },
  {
    label: "Tab 3",
    content: "Tab 3 content",
    badge: "Error",
    badgeVariant: "negative",
  },
  { label: "Tab 4", content: "Tab 4 content" },
];

export function App() {
  return (
    <div>
      <h1>Tabs Component</h1>
      <Tabs tabs={tabs} variant="pill" />
      <Tabs tabs={tabs} variant="underline" />
    </div>
  );
}
