import { useState } from "react";
import { IoMdCode } from "react-icons/io";

function Button({ texto,onClick}: { texto: string,onClick:()=>void }) {
  const [state, setState] = useState(false);
  return (
    <button
      className="text-neutral-950 dark:text-neutral-200 duration-700 border-2 2xl:border-4 border-solid border-neutral-950 dark:border-neutral-200 rounded-2xl 2xl:rounded-3xl py-2 xl:py-4 2xl:py-8 md:px-10 xl:px-20 2xl:px-60"
      onMouseEnter={() => {
        setState(true);
      }}
      onMouseLeave={() => {
        setState(false);
      }}  
      onClick={onClick}
    >
      <div className="flex justify-center relative pr-6 gap-1">
        <IoMdCode 
          className="fill-red-700 w-6 h-6 self-center icon-transition"
          id="icone"
          style={{ opacity: state ? 1 : 0 }}
        />
        <span className="text-2xl md:text-2xl xl:text-3xl 2xl:text-5xl">{texto}</span>
      </div>
    </button>
  );
} 

export default Button;
