import Button from "../components/start/startButton";
import Options from "../components/start/options";
import { IoMdCode } from "react-icons/io";
import { useEffect, useState } from "react";
import Bg from "../components/background";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function StartApp() {
  const [showOp, setShowOp] = useState(false);
  const navigate = useNavigate();

  const toggleOptions = () => {
    if (showOp) {
      setTimeout(() => {
        document.getElementById("buttons")?.classList.toggle("hidden");
      }, 300);
    } else {
      document.getElementById("buttons")?.classList.toggle("hidden");
    }
    setShowOp(!showOp);
  };

  function setDark() {
    const isDark = localStorage.getItem("darkMode");
    console.log("aqui");
    if (isDark) {
      if (isDark != "true") {
        document.getElementById("startRoot")?.classList.remove("dark");
      }
    }
    localStorage.clear();
  }

  useEffect(() => {
    setDark();
  });

  const { t } = useTranslation();

  return (
    <div className="dark" id="startRoot">
      <Bg id="start">
        <div className="grid justify-center xl:h-full items-center mt-4 menu-rows xl:grid-rows-[auto_auto] pb-4 sm:pb-0 gap-20 md:gap-8 2xl:gap-36">
          <div className="h-fit">
            <div className="flex items-center xl:items-baseline flex-col xl:flex-row mt-12">
              <IoMdCode className="fill-red-700 xl:w-8 2xl:w-12 xl:h-8 2xl:h-12" />
              <h1 className="text-3xl md:text-5xl xl:text-7xl 2xl:text-9xl text-neutral-950 dark:text-neutral-200 duration-700 display-font">
                Samuel Bitdinger
              </h1>
            </div>
            <div className="flex w-full justify-center mt-2 items-baseline">
              <h2 className="text-neutral-950 dark:text-neutral-200 duration-700 text-2xl md:text-4xl xl:text-5xl 2xl:text-7xl display-font">
                portifólio
              </h2>
              <span className="text-red-700 justify-self-center text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl lh">
                .
              </span>
            </div>
          </div>
          <div
            className="grid justify-self-center xl:self-start items-end gap-5 2xl:gap-12 px-4 md:px-10 lg:px-4 xl:px-0"
            id="buttons"
          >
            <Button
              texto={t("botaoIniciar")}
              onClick={() => {
                if (
                  document
                    .getElementById("startRoot")
                    ?.classList.contains("dark")
                ) {
                  localStorage.setItem("darkMode", "true");
                } else {
                  localStorage.setItem("darkMode", "false");
                }
                navigate("/main");
              }}
            ></Button>
            <Button texto={t("botaoOpcoes")} onClick={toggleOptions}></Button>
            <Button texto={t("botaoSair")} onClick={() => {}}></Button>
          </div>
          <Options
            isVisible={showOp}
            toggleVisibility={toggleOptions}
          ></Options>
        </div>
      </Bg>
    </div>
  );
}

export default StartApp;
