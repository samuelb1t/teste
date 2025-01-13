import { ExpandCard } from "./expandCards";
import { useTranslation } from "react-i18next";

function Projects() {
  const {t} = useTranslation();
  return (
    <section className="mt-8 2xl:mt-16 px-4 2xl:px-12">
      <h1 className="text-neutral-950 dark:text-neutral-200 block text-3xl md:text-4xl xl:text-5xl 2xl:text-8xl mb-2 md:mb-4 lg:mb-2 2xl:mb-12">
        {t("projetos")}<span className="text-red-700 text-5xl xl:text-7xl 2xl:text-9xl sm:leading-10">.</span>
      </h1>
      <ExpandCard></ExpandCard>
    </section>
  );
}

export default Projects;
