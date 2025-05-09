import type { Metadata } from 'next'
import { services } from '@/components/offer/equimpent-services'
type Props = {
  params: Promise<{ id: string }>
}
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { id } = await params
  const service = services.find((item) => item.slug == id)
  return {
    title: `${service?.title} в Саратове и Энгельсе`,
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