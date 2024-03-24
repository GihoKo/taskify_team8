import { CHIP_COLOR_LIST } from '@constants/ColorChipsColor';

import ColorSelectList from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/ColorSelectList/ColorChip',
  component: ColorSelectList.ColorChip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    chipColor: { control: 'color' },
    selected: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Stroy) => (
      <ColorSelectList>
        <ColorSelectList.Container>
          <Stroy />
        </ColorSelectList.Container>
      </ColorSelectList>
    ),
  ],
  // args: { onClick: fn() },
} satisfies Meta<typeof ColorSelectList.ColorChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: '기본 칼라 칩 한 개',
  args: {
    chipColor: CHIP_COLOR_LIST[0],
    selected: false,
  },
};

export const CheckedColorChip: Story = {
  name: '선택된 기본 칼라 칩 한 개',
  args: {
    chipColor: CHIP_COLOR_LIST[0],
    selected: true,
  },
};

export const Compoited: Story = {
  name: '기본 칼라 칩 여러 개',
  args: {
    chipColor: CHIP_COLOR_LIST[0],
    selected: false,
  },
  decorators: [
    () => (
      <ColorSelectList>
        <ColorSelectList.Container>
          {CHIP_COLOR_LIST.map((color) => (
            <ColorSelectList.ColorChip
              key={color}
              onClick={({ selectedColor }) => console.log(selectedColor)}
              chipColor={color}
              selected={false}
            />
          ))}
        </ColorSelectList.Container>
      </ColorSelectList>
    ),
  ],
};
