import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div>
      <p>{t("title")}</p>
    </div>
  );
}
