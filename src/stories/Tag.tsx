import React from 'react'
import './tag.css'

interface TagProps {
  size?: 'sm' | 'md'
  label?: '학문' | '연예' | '게임' | '기타'
  theme?: 'sunny' | 'rainy' | 'snowy'
  onClick?: () => void
}

export const Tag = ({
  size = 'md',
  label = '학문',
  theme = 'sunny',
  ...props
}: TagProps) => {
  return (
    <button
      type="button"
      className={['storybook-tag', `storybook-tag--${size}`].join(' ')}
    >
      {label}
    </button>
  )
}
