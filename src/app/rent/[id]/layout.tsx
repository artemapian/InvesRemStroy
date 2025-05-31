import { tehnix } from '@/components/constants'
import type { Metadata } from 'next'
type Props = {
  params: Promise<{ id: string }>
}
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { id } = await params
  const tehnic = tehnix.find((item) => item.slug == id)
  return {
    title: `Аренда ${tehnic?.descriptionType} в Саратове | «ИнвестРемСтрой»`,
  }
}
export default function RentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return (
      <main>{children}</main>
    )
}