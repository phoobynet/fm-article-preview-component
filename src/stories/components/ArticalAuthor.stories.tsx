import ArticleAuthor from '@/components/ArticleAuthor'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

export default {
  title: 'Components/ArticleAuthor',
  component: ArticleAuthor,
} as ComponentMeta<typeof ArticleAuthor>

const Template: ComponentStory<typeof ArticleAuthor> = () => <ArticleAuthor />

export const Default = Template.bind({})
