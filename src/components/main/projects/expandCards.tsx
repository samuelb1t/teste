"use client";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../../hooks/use-outside-click";
import ProjectCard from "./3dCard";
import { ProjectList } from "./projectList";

export function ExpandCard() {
  const [active, setActive] = useState<(ReturnType<typeof ProjectList>)[number] | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("wheel", () => {
      setActive(null);
    });
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const projects = ProjectList();

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-4/5 sm:w-full max-w-[500px] 2xl:max-w-[60%] h-3/5 sm:h-full md:h-fit md:max-h-[90%] 2xl:h-[70%] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden"
            >
              <img
                src={active.src}
                alt={active.title}
                className="w-full h-48 md:h-56 lg:h-64 2xl:h-[32rem] object-cover"
              />
              <div className="p-4 2xl:px-12">
                <h3 className="font-medium text-neutral-700 dark:text-neutral-200 text-base lg:text-lg 2xl:text-5xl 2xl:mt-4">
                  {active.title}
                </h3>
                <div className="text-neutral-600 text-xs md:text-sm lg:text-base 2xl:text-4xl h-40 lg:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 2xl:mt-6">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="grid grid-cols-2 md:grid-cols-3 items-start gap-3 sm:gap-6">
        {projects.map((card) => (
          <motion.div
            key={card.title}
            layoutId={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
          >
            <ProjectCard title={card.title} img={card.src} />{" "}
          </motion.div>
        ))}
      </ul>
    </>
  );
}
