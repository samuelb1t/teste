import calculadora from "../../../assets/calculadora.png";
import clima from "../../../assets/clima.png";
import filme from "../../../assets/letterbox.png";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const ProjectList = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("projeto1"),
      src: calculadora,
      content: () => (
        <div>
          <div>
            <p className="mt-1">{t("projeto1_desc")}</p>
            <p className="mt-1">{t("projeto1_andamento")}</p>
          </div>
          <div className="flex mt-2 gap-4">
            <a
              href="https://github.com/samuelb1t/calculadora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 md:w-8 md:h-8 2xl:w-20 2xl:h-20" />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: t("projeto2"),
      src: clima,
      content: () => (
        <div>
          <div>
            <p className="mt-2">{t("projeto2_desc")}</p>
            <p className="mt-1">{t("projeto2_andamento")}</p>
          </div>
          <div className="flex mt-2 gap-4">
            <a
              href="https://github.com/samuelb1t/projeto-clima-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 md:w-8 md:h-8 2xl:w-20 2xl:h-20" />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: t("projeto3"),
      src: filme,
      content: () => (
        <div>
          <div>
            <p className="mt-2">{t("projeto3_desc")}</p>
            <p className="mt-1">{t("projeto3_andamento")}</p>
          </div>
          <div className="flex mt-2 gap-4">
            <a
              href="https://github.com/samuelb1t/projeto-letterbox-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 md:w-8 md:h-8 2xl:w-20 2xl:h-20" />
            </a>
          </div>
        </div>
      ),
    },
  ];
};
