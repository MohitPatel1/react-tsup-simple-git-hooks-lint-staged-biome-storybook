import { HelloWorldComponent } from "@flux0-ai/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/HelloWorld",
  component: HelloWorldComponent,
} as Meta<typeof HelloWorldComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
