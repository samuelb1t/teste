
function Course({title,school,hours,date}:{title: string,school:string,hours:string,date:string}){
    return(
        <section className="bg-[#F5EDED] dark:bg-neutral-900 max-w-36 md:max-w-48 lg:max-w-72 xl:max-w-96 2xl:max-w-[36rem] 2xl:h-96 text-center p-2 2xl:p-6 rounded-xl flex flex-col justify-between text-font gap-1 xl:gap-2" id="course">
            <h3 className="text-sm lg:text-base xl:text-lg 2xl:text-4xl font-bold break-words">{title}</h3>
            <span className="text-xs lg:text-sm xl:text-base 2xl:text-3xl block">{school}</span>
            <span className="text-xs lg:text-sm xl:text-base 2xl:text-3xl block">{hours}</span>
            <span className="text-xs lg:text-sm xl:text-base 2xl:text-3xl block">{date}</span>
        </section>  
    )
}

export default Course;  
