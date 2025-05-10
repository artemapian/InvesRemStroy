import React from "react";
import { TitleMainPage } from "./title-main-page"

const MainPage = React.memo(() => {
    return (
        <div className="relative title-main-page min-h-[100vh] overflow-hidden flex items-center px-5 py-1 md:px-20">
        <div id='main' className="absolute -top-[250px] " aria-hidden="true"></div>
        <div className="absolute inset-0 z-0 ">
            <div
            className="w-auto h-full bg-scroll lg:bg-fixed bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url("/main-page.webp")`
            }}
            />
            </div>
        <TitleMainPage />
    </div>
    )
});
MainPage.displayName = "TrustBanner";

export default MainPage; 
