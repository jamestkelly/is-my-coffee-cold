import { useTranslations } from "next-intl";
import Hero from "./ui/hero/hero";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div>
      <Hero />
    </div>
  );
}
