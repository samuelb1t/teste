import { FloatingDockDemo } from "./floating-dock-demo";

function Skills(){
    return(
        <section className="grid sm:grid-cols-[1fr_auto] px-4 sm:px-0 2xl:px-12 md:gap-8 lg:gap-14 2xl:gap-32 mt-12 2xl:mt-28">
            <div>
                <FloatingDockDemo></FloatingDockDemo>
            </div>
            <h1 className="text-neutral-800 dark:text-neutral-200 sm:text-[#E2DAD6] sm:dark:text-neutral-800 text-4xl md:text-7xl lg:text-8xl 2xl:text-9xl leading-none md:max-w-24 lg:max-w-36 md:break-words">SKILLS</h1>
        </section>
    )
}

export default Skills;  
