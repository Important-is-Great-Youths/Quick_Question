import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Tag } from './Tag'

const meta = {
  title: 'Tag',
  component: Tag,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn() }
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    size: 'sm'
  }
}

export const Medium: Story = {
  args: {
    size: 'md'
  }
}

export const Scolarship: Story = {
  args: {
    label: '학문'
  }
}
export const Entertainments: Story = {
  args: {
    label: '연예'
  }
}

export const Game: Story = {
  args: {
    label: '게임'
  }
}

export const Etc: Story = {
  args: {
    label: '기타'
  }
}
