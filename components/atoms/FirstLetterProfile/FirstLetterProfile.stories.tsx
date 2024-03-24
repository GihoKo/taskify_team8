import { fn } from '@storybook/test';

import { S } from '@/app/dashboard/_components/molecules/DashboardMemberList';

import FirstLetterProfile from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/FirstLetterProfile',
  component: FirstLetterProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof FirstLetterProfile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithoutBorderProfile: Story = {
  name: '테두리 없는 프로필',
  args: {
    profileSize: {
      onMobile: '2.2rem',
      onTablet: '2.4rem',
    },
    fontSize: {
      onMobile: '1rem',
      onTablet: '1.2rem',
    },
    backgroundColor: '#a3c4a2',
    as: 'button',
    children: '조형민',
  },
};

export const WithBorderProfile: Story = {
  name: '테두리 있고 살짝 더 큰 프로필',
  args: {
    profileSize: {
      onMobile: '3.4rem',
      onPc: '3.8rem',
    },
    fontSize: {
      onMobile: '1.4rem',
      onPc: '1.6rem',
    },
    backgroundColor: '#a3c4a2',
    as: 'button',
    children: '조형민',
    borderWidth: {
      onMobile: '2px',
    },
  },
};

export const OverlappingProfiles: Story = {
  name: '겹쳐진 프로필들',
  decorators: [
    (Story) => (
      <S.Container>
        {[0, 1, 2, 3, 4].map((_, idx) => (
          <Story
            key={_}
            args={{
              isOverlapping: !!idx,
              profileSize: {
                onMobile: '3.4rem',
                onPc: '3.8rem',
              },
              fontSize: {
                onMobile: '1.4rem',
                onPc: '1.6rem',
              },
              backgroundColor: '#a3c4a2',
              as: 'button',
              children: '조형민',
              borderWidth: {
                onMobile: '2px',
              },
            }}
          />
        ))}
      </S.Container>
    ),
  ],
  args: {
    profileSize: {
      onMobile: '3.4rem',
      onPc: '3.8rem',
    },
    fontSize: {
      onMobile: '1.4rem',
      onPc: '1.6rem',
    },
    backgroundColor: '#a3c4a2',
    as: 'button',
    children: '조형민',
    borderWidth: {
      onMobile: '2px',
    },
  },
};
