import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { IoMdCode } from "react-icons/io";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Options({
  isVisible,
  toggleVisibility,
}: {
  isVisible: boolean;
  toggleVisibility: () => void;
}) {
  const [eng, setEng] = useState(false);
  const [light, setLight] = useState(false);

  const [isClosing, setIsClosing] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [isDark, setIsDark] = useState(false);

  function changeTheme() {
    const root = document.getElementById("startRoot");
    root?.classList.toggle("dark");
  }

  function checkTheme(){
    const root = document.getElementById("startRoot");
    if(!root?.classList.contains("dark")){
      setLight(true);
    }
  }

  useEffect(()=>{
    checkTheme()
  });

  const { i18n, t } = useTranslation();
  

  function changeLanguage(){
    if(i18n.language === "pt"){
      i18n.changeLanguage("en");
    }else{
      i18n.changeLanguage("pt")
    }
  }

  return (
    <motion.section
      className="h-full border-2 2xl:border-4 border-solid border-neutral-950 dark:border-neutral-200 rounded-3xl grid justify-self-center relative p-6 lg:px-10 xl:px-16 2xl:px-32"
      id="options"
      initial={{ x: "-50%", display: "none", opacity: 0 }}
      animate={{
        x: isVisible ? 0 : "-50%",
        display: isVisible ? "grid" : "none",
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <motion.div
        className="absolute top-2 right-2"
        initial={{ transform: "rotate(0)" }}
        animate={{ transform: isClosing ? "rotate(180deg)" : "rotate(0)" }}
        transition={{ type: "tween", duration: 0.3 }}
        onMouseEnter={() => {
          setIsClosing(true);
        }}
        onMouseLeave={() => {
          setIsClosing(false);
        }}
      >
        <IoClose
          className="fill-neutral-950 dark:fill-neutral-200 cursor-pointer md:w-5 md:h-5 lg:w-6 lg:h-6 2xl:w-16 2xl:h-16"
          onClick={toggleVisibility}
        />
      </motion.div>
      <div className="self-center grid gap-2 sm:gap-4">
        <div className="grid justify-center justify-items-center text-neutral-950 dark:text-neutral-200 duration-700">
          <h2 className="font-bold mb-1 2xl:mb text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl">
          {t("idioma")}
          </h2>
          <div className="flex mr-3 items-center">
            <IoMdCode
              className="fill-red-700 w-5 2xl:w-8 2xl:h-8"
              style={{ opacity: eng ? 0 : 1 }}
            />
            <span
              className="text-xl 2xl:mb-2 lg:text-2xl xl:text-3xl 2xl:text-5xl font-normal cursor-pointer"
              onClick={() => {
                if(eng){
                  changeLanguage();
                }
                setEng(false);
              }}
            >
              {t("idioma1")}
            </span>
          </div>
          <div className="flex mr-3 items-center">
            <IoMdCode
              className="fill-red-700 w-5 2xl:w-8 2xl:h-8"
              style={{ opacity: eng ? 1 : 0 }}
            />
            <span
              className="text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-normal cursor-pointer"
              onClick={() => {
                if(!eng){
                  changeLanguage();
                }
                setEng(true);
              }}
            >
              {t("idioma2")}
            </span>
          </div>
        </div>
        <div className="grid justify-center justify-items-center text-neutral-950 dark:text-neutral-200 duration-700">
          <h2 className="font-bold mb-1 2xl:mb-4 text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl">
          {t("tema")}
          </h2>
          <div className="flex gap-8">
            <div className="flex items-center">
              <IoMdCode
                className="fill-red-700 w-5 2xl:w-8 2xl:h-8"
                style={{ opacity: light ? 0 : 1 }}
              />
              <motion.div
                initial={{ transform: "rotate(0)" }}
                animate={{ transform: isDark ? "rotate(360deg)" : "rotate(0)" }}
                transition={{ type: "tween", duration: 0.3 }}
                onMouseEnter={() => {
                  setIsDark(true);
                }}
                onMouseLeave={() => {
                  setIsDark(false);
                }}
              >
                <MdDarkMode
                  className="cursor-pointer md:w-5 md:h-5 lg:w-6 lg:h-6 2xl:w-16 2xl:h-16"
                  onClick={() => {
                    const root = document.getElementById("startRoot");
                    if(!root?.classList.contains("dark")){
                      setLight(false);
                      changeTheme();
                    }
                  }}
                />
              </motion.div>
            </div>
            <div className="flex mr-3 items-center">
              <IoMdCode
                className="fill-red-700 w-5 2xl:w-8 2xl:h-8"
                style={{ opacity: light ? 1 : 0 }}
              />
              <motion.div
                initial={{ transform: "rotate(0)" }}
                animate={{
                  transform: isLight ? "rotate(360deg)" : "rotate(0)",
                }}
                transition={{ type: "tween", duration: 0.3 }}
                onMouseEnter={() => {
                  setIsLight(true);
                }}
                onMouseLeave={() => {
                  setIsLight(false);
                }}
              >
                <MdLightMode
                  className="cursor-pointer md:w-5 md:h-5 lg:w-6 lg:h-6   2xl:w-16 2xl:h-16"
                  onClick={() => {
                    const root = document.getElementById("startRoot");
                    if(root?.classList.contains("dark")){
                      setLight(true);
                      changeTheme();
                    }
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Options;
