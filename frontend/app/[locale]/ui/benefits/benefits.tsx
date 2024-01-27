import {
  ClockIcon,
  ScaleIcon,
  SparklesIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Card from "../card/card";

/*
              className="w-10 h-10 mb-2 text-primary dark:text-primary"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
*/
export default function Benefits() {
  const t = useTranslations("Benefits");

  return (
    <section className="my-6 flex flex-col w-full justify-items-center">
      <div className="font-bold text-2xl text-center">{t("statement")}</div>
      <div className="mt-4 flex w-3/4 self-center">
        <Card
          title={t("time.title")}
          body={t("time.description")}
          link={"www.google.com"}
          linkDescription={t("demo")}
          svgTag={
            <ClockIcon
              className="w-10 h-10 mb-2 text-primary dark:text-primary"
              aria-hidden={true}
            />
          }
        />
        <Card
          title={t("enjoyment.title")}
          body={t("enjoyment.description")}
          link={"www.google.com"}
          linkDescription={t("demo")}
          svgTag={
            <SparklesIcon
              className="w-10 h-10 mb-2 text-primary dark:text-primary"
              aria-hidden={true}
            />
          }
        />

        <Card
          title={t("reduce.title")}
          body={t("reduce.description")}
          link={"www.google.com"}
          linkDescription={t("demo")}
          svgTag={
            <TrashIcon
              className="w-10 h-10 mb-2 text-primary dark:text-primary"
              aria-hidden={true}
            />
          }
        />

        <Card
          title={t("precision.title")}
          body={t("precision.description")}
          link={"www.google.com"}
          linkDescription={t("demo")}
          svgTag={
            <ScaleIcon
              className="w-10 h-10 mb-2 text-primary dark:text-primary"
              aria-hidden={true}
            />
          }
        />
      </div>
    </section>
  );
}
