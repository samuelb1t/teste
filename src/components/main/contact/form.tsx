"use client";
import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { cn } from "../../lib/utils";
import { IoMdCode } from "react-icons/io";
import { useTranslation } from "react-i18next";

export function Form() {
const {t} = useTranslation();

  return (
    <div className="max-w-md 2xl:max-w-4xl w-full mx-auto rounded-none md:rounded-2xl p-2 bg-transparent">
      <form className="grid gap-4 md:gap-2 xl:gap-4 2xl:gap-8 sm:w-auto " action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="31315395-dc2f-453c-9ec7-683cc43d0476" />
        <LabelInputContainer>
            <Label htmlFor="fullname">{t("label1")}</Label>
            <Input id="fullname" placeholder={t("placeholder1")} type="text" name="name" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email">{t("label2")}</Label>
          <Input id="email" placeholder={t("placeholder2")} type="email" name="email"/>
        </LabelInputContainer>
        <LabelInputContainer>  
          <Label htmlFor="mensagem">{t("label3")}</Label>
          <Textarea placeholder={t("placeholder3")} name="message"></Textarea>
        </LabelInputContainer>
        <button
          className="text-xl md:text-2xl lg:text-2xl 2xl:text-5xl bg-gradient-to-br relative group/btn from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-800 w-full text-neutral-950 dark:text-white rounded-md 2xl:rounded-xl py-1 2xl:py-3 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center gap-1"
          type="submit"   
        >
          <IoMdCode className="fill-red-700 w-3 md:w-4 lg:w-5 2xl:w-8"/>
          {t("botao")}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
