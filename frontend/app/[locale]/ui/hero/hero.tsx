"use client";

import translations from "@/public/lang/clientTranslations.json";
import { useLocale } from "next-intl";
import { Suspense } from "react";
import LinkButton from "../buttons/linkButton";
import { CoffeCupModel } from "../three/coffeeCup";

export default function Hero() {
  const locale = useLocale();
  const heroTranslations = translations.Hero.find(
    (lang) => lang.locale === locale
  );

  return (
    <section className="bg-white-primary dark:bg-gray-900">
      <div className="m-4 bg-primary-0 rounded-2xl grid h-full max-w-screen-xl w-5/6 px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white-primary dark:text-white">
            {heroTranslations?.intro}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white">
            {heroTranslations?.description}
          </p>
          <div className="flex flex-1 justify-left pl-10">
            <LinkButton
              href="/register"
              linkClassName="text-base font-semibold leading-6 text-primary-0 hover:text-white-primary"
              className="bg-white rounded-xl px-10 py-2.5 hover:bg-primary-2 transition-all duration-50 ease-linear hover:text-white-primary"
              displayText={heroTranslations?.register}
            />
          </div>
        </div>
        <div className="z-10 hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Suspense fallback={null}>
            <CoffeCupModel />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
