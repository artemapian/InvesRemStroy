import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "ИнвестРемСтрой - Согласие на обработку персональных данных",
};
export default function MaterialsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return (
      <main>{children}</main>
    )
}