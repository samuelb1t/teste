import { FaGithub } from "react-icons/fa";
import LinkedinSvg from "../../../assets/linkedinSvg";
import { Form } from "./form";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const [onGithub, setonGithub] = useState(false);
  const [onLinkedin, setOnLinkedin] = useState(false);

  function toggleonGithub() {
    setonGithub(!onGithub);
  }

  function toggleOnLinkedin(){
    setOnLinkedin(!onLinkedin)
  }

  const {t} = useTranslation();

  return(
    <section className="grid mt-8 2xl:mt-16 2xl:px-12">
      <div className="grid contact-columns items-center gap-2 sm:gap-4 px-4 sm:px-0 mb-[10%] sm:mb-0">
        <h1 className="text-neutral-950 dark:text-neutral-200 text-3xl md:text-4xl xl:text-5xl 2xl:text-8xl mb-2 md:mb-4 lg:mb-2 2xl:mb-12">
          {t("contato")}<span className="text-red-700 text-5xl xl:text-7xl 2xl:text-9xl sm:leading-10">.</span>
        </h1>
        <span className="bg-neutral-950 dark:bg-neutral-200 w-full separator rounded-sm"></span>
        <a href="https://github.com/samuelb1t" target="_blank">
          <FaGithub
            className={`w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-16 2xl:h-16 duration-300 transform ${onGithub ? 'scale-150' : 'scale-100'} fill-neutral-950 dark:fill-neutral-200`}
            onMouseEnter={toggleonGithub}
            onMouseLeave={toggleonGithub}
          />
        </a>
        <span className="bg-neutral-950 dark:bg-neutral-200 w-1 sm:w-6 separator rounded-sm"></span>
        <a
          href="https://www.linkedin.com/in/samuel-bitdinger-140a7627b/"
          target="_blank"
          className="duration-300"
          style={{ color: onLinkedin ? "#696969" : "#e5e5e5" }} 
        >
          <LinkedinSvg hover={toggleOnLinkedin} onLinkedin={onLinkedin}/>
        </a>
      </div>
      <Form></Form>
    </section>
  );
}

export default Contact;
