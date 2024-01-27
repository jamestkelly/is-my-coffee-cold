import { useTranslations } from "next-intl";
import Benefits from "./ui/benefits/benefits";
import Footer from "./ui/footer/footer";
import Header from "./ui/header/header";
import Hero from "./ui/hero/hero";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div className="flex flex-col h-screen justify-between bg-white-primary dark:bg-primary-1">
      <Header />
      <div>
        <Hero />
      </div>
      <div>
        <Benefits />
      </div>
      <Footer />
    </div>
  );
}
