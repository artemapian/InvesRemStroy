import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "«ИнвестРемСтрой» - Положение об обработке персональных данных",
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