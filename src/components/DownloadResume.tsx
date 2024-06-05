'use client'

import { GrDocumentDownload } from "react-icons/gr";
import { ButtonHover } from "./ButtonHover";
import { useLanguage } from "@/hooks/useLanguage";
import { Tooltip } from "./Tooltip";

export const DownloadResume = () => {

    const { lang } = useLanguage();

    const handleDownload = () => {
        const fileUrl = "/pdf/MiguelPachecoCV.pdf";
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "MiguelPachecoCV.pdf";
        link.click();
    }

    return (
        <>
            <ButtonHover text="Resume" handleClick={handleDownload} Icon={GrDocumentDownload} className="bg-sky-200 dark:bg-sky-500" isVisibleIcon={true}/>
            <Tooltip text={ lang.hero.tooltipResume } />
        </>
    )
}
