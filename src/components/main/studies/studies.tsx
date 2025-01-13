import { InfiniteMovingCards } from "../../ui/infinite-moving-cards.tsx";
import { useTranslation } from "react-i18next";

function Studies() {
  const {t} = useTranslation();

  return (
    <section className="grid sm:grid-cols-[auto_1fr] px-4 sm:px-0 2xl:px-12 md:gap-8 lg:gap-14 2xl:gap-32 mt-12 2xl:mt-28">
      <h1 className="text-neutral-800 dark:text-neutral-200 sm:text-[#E2DAD6] sm:dark:text-neutral-800 text-4xl md:text-7xl lg:text-8xl 2xl:text-9xl leading-none md:max-w-24 lg:max-w-36 md:break-words">
        {t("estudos")}</h1>
      <section className="text-neutral-950 dark:text-neutral-200 grid grid-rows-[auto_auto_auto_auto]">
        <h2 className="block text-3xl md:text-4xl xl:text-5xl 2xl:text-8xl mb-2">
        {t("faculdade")}<span className="text-red-700 text-5xl xl:text-7xl 2xl:text-9xl sm:leading-10">.</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-2 md:gap-4 lg:gap-8 2xl:gap-16 text-font">
          <div className="border-2 rounded-xl 2xl:rounded-3xl p-2 2xl:p-6 box-border grid border-neutral-950 dark:border-neutral-200">
            <h3 className="text-base md:text-lg xl:text-xl 2xl:text-4xl">{t("curso1")}</h3>
            <span className="text-xs md:text-sm xl:text-lg 2xl:text-3xl block">UERGS</span>
            <span className="text-xs md:text-sm xl:text-lg 2xl:text-3xl">2023/2 - 2024/1</span>
          </div>
          <div className="border-2 rounded-xl 2xl:rounded-3xl p-2 2xl:p-6 box-border grid border-neutral-950 dark:border-neutral-200">
            <h3 className="text-base md:text-lg xl:text-xl 2xl:text-4xl">{t("curso2")}</h3>
            <span className="text-xs md:text-sm xl:text-lg 2xl:text-3xl block">PUC-RS</span>
            <span className="text-xs md:text-sm xl:text-lg 2xl:text-3xl">2024/2 - 2027/2</span>
          </div>
        </div>
        <h2 className="block text-3xl md:text-4xl xl:text-5xl 2xl:text-8xl  mb-2 mt-1 md:mt-2 lg:mt-4">
        {t("demaisCursos")}
          <span className="text-red-700  text-5xl xl:text-7xl 2xl:text-9xl sm:leading-10">.</span>
        </h2>
        <div className="bg-[#E2DAD6] dark:bg-neutral-800 p-1 lg:p-2 flex overflow-auto rounded-xl" id="course-container">
            <InfiniteMovingCards
            items={courses}
            direction="right"
            speed="normal"
            ></InfiniteMovingCards>
        </div>
      </section>
    </section>
  );
}

const courses = [
  {
    title: "JavaScript completo es6+",
    school: "Origamid",
    hours: "120h",
    date: "em andamento",
  },
  {
    title: "HTML e CSS para Iniciantes",
    school: "Origamid",
    hours: "46h",
    date: "jul/2024",
  },
  {
    title: "UI Design para Iniciantes",
    school: "Alura",
    hours: "34h",
    date: "mar/2024",
  },
  {
    title: "JavaScript: consumindo e tratando dados de uma API",
    school: "Alura",
    hours: "6h",
    date: "maio/2023",
  },
  {
    title: "JavaScript: manipulando o DOM",
    school: "Alura",
    hours: "6h",
    date: "maio/2023",
  },
  {
    title: "JavaScript para Web: Crie páginas dinâmicas",
    school: "Alura",
    hours: "10h",
    date: "abril/2023",
  },
  {
    title: "HTML e CSS: trabalhando com responsividade e publicação de projetos",
    school: "Alura",
    hours: "6h",
    date: "mar/2023",
  },
  {
    title: "HTML e CSS: trabalhando com responsividade e publicação de projetos",
    school: "Alura",
    hours: "6h",
    date: "mar/2023",
  },
  {
    title: "Lógica de programação: comece em lógica com o jogo Pong e JavaScript",
    school: "Alura",
    hours: "6h",
    date: "mar/2023",
  },
  {
    title: "Lógica de programação: laços e listas com JavaScript",
    school: "Alura",
    hours: "4h",
    date: "mar/2023",
  },
];

export default Studies;
