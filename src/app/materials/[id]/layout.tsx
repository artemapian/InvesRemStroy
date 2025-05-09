import type { Metadata } from 'next'
import { materials } from '@/components/offer/building-materials';
type Props = {
  params: Promise<{ id: string }>
}
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { id } = await params
  const material = materials.find((item) => item.slug == id)
  return {
    title: `Доставка ${material?.descriptionType} в Саратове и Энгельсе`,
  }
}
export default function MaterialsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return (
      <main>{children}</main>
    )
}