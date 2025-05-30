'use client'
import { useIsMobile } from "./hooks/useMobile"
import { TextTitleMainPage } from "./text-title-main-page"


export const TitleMainPage = () => {
    const {MotionOrDiv, isMobile} = useIsMobile()
    return (
        <MotionOrDiv
        {...(!isMobile && {
          initial: { opacity: 0, y: -30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, ease: "easeOut" },
        })}
        className='relative title-main-page md:mt-0  text-white md:mb-15 md:max-w-4xl z-10'>
        <TextTitleMainPage />
        </MotionOrDiv>
    )
}
