import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";
import "./Badge.css";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      description: "Text content displayed inside the badge.",
    },
    variant: {
      control: { type: "select" },
      options: ["neutral", "positive", "negative"],
      description: "Visual style of the badge.",
    },
  },
  args: {
    content: "Badge",
    variant: "neutral",
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Badge** component is used to display small status indicators or counters.
It supports three visual variants:

- **neutral** - subtle, default background  
- **positive** - success/confirmation background  
- **negative** - warning/error background  

Mobile tokens apply automatically at **@media (max-width: 768px)** using:

- \`--badge-pad-x-mobile\`
- \`--badge-pad-y-mobile\`
- \`--badge-radius-mobile\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Overview: Story = {};

export const Neutral: Story = {
  args: {
    content: "Neutral",
    variant: "neutral",
  },
};

export const Positive: Story = {
  args: {
    content: "Positive",
    variant: "positive",
  },
};

export const Negative: Story = {
  args: {
    content: "Negative",
    variant: "negative",
  },
};

export const Mobile: Story = {
  args: {
    content: "Badge",
    variant: "neutral",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
    docs: {
      description: {
        story:
          "Mobile preview. Uses mobile badge tokens (`*-mobile`) via @media (max-width: 768px).",
      },
    },
  },
};
