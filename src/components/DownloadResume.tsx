'use client'

export const DownloadResume = () => {
    const handleDownload = () => {
        const fileUrl = "/pdf/MiguelPachecoCV.pdf";
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "MiguelPachecoCV.pdf";
        link.click();
    }

    return (
        <button
            className="flex items-center text-sm gap-3 min-h-10 bg-sky-200 hover:bg-opacity-80 dark:bg-sky-500 hover:dark:bg-opacity-90 text-slate-900 dark:text-indigo-100 py-2 px-4 rounded-lg font-semibold duration-100"
            onClick={handleDownload}
        >
            Resume
        </button>
    )
}
