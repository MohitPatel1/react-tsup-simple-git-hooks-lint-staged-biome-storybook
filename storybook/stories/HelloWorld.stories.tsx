import { HelloWorldComponent } from "@mohit11/monad";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/HelloWorld",
  component: HelloWorldComponent,
} as Meta<typeof HelloWorldComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
