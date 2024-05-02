export interface ProductCardProps {
  id: number,
  name: string,
  cost: number,
  weight: number,
  density: number,
  sweetness: number,
  acidity: number,
  roast: 'light' | 'medium' | 'dark',
  className?: string,
}
