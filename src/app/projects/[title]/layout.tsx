export default function ProjectLayout({children}: {children: React.ReactNode}) {
  return (
    <div lang="en" className="!scroll-smooth">
      <div
        className={` text-gray-950 relative  pt-28 sm:pt-36 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <span>You can find information about the project below: </span>
        {children}
      </div>
    </div>
  );
}
