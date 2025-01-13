import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Picture } from "./picture";
import { useTranslation } from "react-i18next";

function About() {
  const [title] = useTypewriter({
    words: ["Front-end dev"],
    loop: Infinity,
  });

    const { t } = useTranslation();
  
  return (
    <section className="grid about-columns sm:gap-12 2xl:gap-24 mt-12 sm:mt-16 2xl:mt-44 2xl:px-12 lg:mb-32">
      <div className="text-neutral-950 dark:text-neutral-200 flex flex-col items-center sm:items-start">
        <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-bold sm:mb-8 2xl:mb-28">
          {title} <Cursor cursorColor="#b91c1c" />
        </h1>
        <div className="block sm:hidden my-8">
          <Picture></Picture>   
        </div>
        <p className="text-xs md:text-base lg:text-xl xl:text-2xl 2xl:text-5xl 2xl:leading-[4rem] font-normal text-font max-w-52 sm:max-w-fit">
        {t("about")}
        </p>
      </div>
      <div className="hidden sm:block">
        <Picture></Picture>
      </div>
    </section>
  );
}

export default About;
