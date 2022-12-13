import ArticleShare from '@/components/ArticleShare'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/ArticleShare',
  component: ArticleShare,
} as ComponentMeta<typeof ArticleShare>

const Template: ComponentStory<typeof ArticleShare> = () => <ArticleShare />

export const Default = Template.bind({})
