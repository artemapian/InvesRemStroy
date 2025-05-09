'use client'
export const FooterButtonNavigate = ({href, title}: {href: string, title: string}) => {
    const ScrollTo = (href: string) => {
        setTimeout(() => {
          const element = document.getElementById(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // задержка, чтобы успел свернуться бургер
    
      };
    return (
        <button className="flex cursor-pointer text-left items-start" onClick={() => ScrollTo(href)}>{title}</button>
    )
}