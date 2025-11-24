import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./Tabs";
import "./Tabs.css";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    viewport: { defaultViewport: "responsive" },
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["pill", "underline"],
      description:
        "Tabs with ‘pill’ and ‘underline’ variants. Supports per-tab badges (neutral | positive | negative)",
    },
    tabs: {
      control: "object",
      description:
        "Tabs prop: an array of objects defining each tab ({ label, content, badge?, badgeVariant? }).",
    },
  },
  args: {
    variant: "pill",
    tabs: [
      {
        label: "Tab 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        label: "Tab 2",
        content:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        label: "Tab 3",
        content:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Overview: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Default Tabs example using the component’s base props inherited from the meta.",
      },
    },
  },
};

export const Pill: Story = {
  args: {
    variant: "pill",
    tabs: [
      {
        label: "Tab 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        label: "Tab 2",
        content:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        label: "Tab 3",
        content:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `Tabs states (variant: "pill"):
- **Selected**: background \`--tabs-pill-selected-bg-*\` and text \`--tabs-pill-selected-text\`.
- **Hover** (selected): \`--tabs-pill-selected-bg-hover\`.
- **Active** (selected): \`--tabs-pill-selected-bg-active\`.
- **Focus** (selected): outline \`--tabs-pill-focus-width\` + \`--tabs-pill-selected-border-focus\`, offset \`--tabs-pill-selected-focus-offset\`.
- **Unselected (default)**: background \`--tabs-pill-unselected-bg-default\`, border \`--tabs-pill-unselected-border-default\`.
- **Hover/Active** (unselected): \`--tabs-pill-unselected-bg-hover/active\` + \`--tabs-pill-unselected-border-hover/active\`.
- **Focus** (unselected): outline \`--tabs-pill-focus-width\` + \`--tabs-pill-unselected-border-focus-outer\`, offset \`--tabs-pill-unselected-focus-offset\`.

**Tip**: to see the *focus* state, use the keyboard (Tab) on the component.`,
      },
    },
  },
};

export const Underline: Story = {
  args: {
    variant: "underline",
    tabs: [
      {
        label: "Tab 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        label: "Tab 2",
        content:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        label: "Tab 3",
        content:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `Tabs states (variant: "underline"):
- **Selected**: text color \`--tabs-underline-text\` + line \`--tabs-underline-line-selected\`.
- **Hover/Active** (selected): line remains \`--tabs-underline-line-selected\`.
- **Unselected**: text \`--tabs-underline-text\`, line transparent; on hover/active use \`--tabs-underline-line-unselected\`.
- **Focus** (selected & unselected): outline \`--tabs-underline-focus-width\` + \`--tabs-underline-focus-color\`; radius \`--tabs-underline-focus-radius\`; offset \`--tabs-underline-focus-offset\`.
- The underline uses height \`--tabs-underline-line-height\` and radius \`--tabs-underline-radius\`.

**Tip**: the *focus* ring is easier to see using the keyboard (Tab).`,
      },
    },
  },
};

export const WithBadges: Story = {
  args: {
    variant: "pill",
    tabs: [
      {
        label: "Tab 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        badge: "Normal",
        badgeVariant: "neutral",
      },
      {
        label: "Tab 2",
        content:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        badge: "New",
        badgeVariant: "positive",
      },
      {
        label: "Tab 3",
        content:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        badge: "Error",
        badgeVariant: "negative",
      },
    ],
  },
};

export const ResponsiveMobile: Story = {
  args: {
    variant: "underline",
    tabs: [
      {
        label: "Tab 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        label: "Tab 2",
        content:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        label: "Tab 3",
        content:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet768",
      viewports: {
        tablet768: {
          name: "Tablet 768",
          styles: { width: "768px", height: "1024px" },
          type: "tablet",
        },
      },
    },
    docs: {
      description: {
        story: `Variant: "underline" — breakpoint @media (max-width: 768px) active.

States:
- **Selected**: text \`--tabs-underline-text\` + line \`--tabs-underline-line-selected\`.
- **Hover/Active** (selected): line keeps \`--tabs-underline-line-selected\`.
- **Unselected**: text \`--tabs-underline-text\`, line transparent; on hover/active use \`--tabs-underline-line-unselected\`.
- **Focus** (selected & unselected): outline \`--tabs-underline-focus-width\` + \`--tabs-underline-focus-color\`; radius \`--tabs-underline-focus-radius\`; offset \`--tabs-underline-focus-offset\`.
- Underline line: height \`--tabs-underline-line-height\`, radius \`--tabs-underline-radius\`.`,
      },
    },
  },
};
