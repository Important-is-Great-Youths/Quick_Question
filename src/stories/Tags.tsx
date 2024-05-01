import React from 'react'
import './tags.css'
import { Tag } from './Tag'

interface TagsProps {
  size?: 'sm' | 'md'
  theme?: 'sunny' | 'rainy' | 'snowy'
}

const tagList: Array<'학문' | '연예' | '게임' | '기타'> = [
  '학문',
  '연예',
  '게임',
  '기타'
]

export const Tags: React.FC<TagsProps> = ({ size = 'md', theme = 'sunny' }) => {
  return (
    <div className={`storybook-tags storybook-tags--${size}`}>
      {tagList.map((label) => (
        <Tag key={label} size={size} label={label} theme={theme} />
      ))}
    </div>
  )
}
