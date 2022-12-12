import ArticleFooter from '@/components/ArticleFooter'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/ArticleFooter',
  component: ArticleFooter,
} as ComponentMeta<typeof ArticleFooter>

const Template: ComponentStory<typeof ArticleFooter> = () => <ArticleFooter />

export const Default = Template.bind({})
