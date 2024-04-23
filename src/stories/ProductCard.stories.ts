import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from 'src/components/ProductCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ProductCard',
  component: ProductCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    name: 'Бразилия Basic',
    cost: 1648,
    weight: 1,
    density: .8,
    sweetness: .6,
    acidity: .4,
    roast: 'medium',
  }
};
