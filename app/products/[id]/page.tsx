import { PRODUCTS } from './products-data';
import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return Object.keys(PRODUCTS).map((id) => ({ id }))
}

export default function ProductDetailPage() {
  return <ProductDetailClient />
}
