import { Meta, StoryObj } from "@storybook/react";

import { CheckBox, CheckBoxProps } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
  args: {
    children: "Create an account",
  },
  argTypes: {
    children: {
        table: {
            disable: true
        }
    }
  },
  decorators: [
    (Story) => {
        return (
            <div className="flex items-center gap-2">
                {Story()}
                <Text size="sm">
                    Lembrar-me de min por 30 dias
                </Text>
            </div>
        )
    }
  ]
} as Meta<CheckBoxProps>;

export const Default: StoryObj<CheckBoxProps> = {};
