"use client";

import { usePathname, useRouter } from "@/lib/navigation";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import { useLocale } from "next-intl";
import { Fragment, useState } from "react";

const languages = [
  { displayName: "English", code: "en" },
  { displayName: "Français", code: "fr" },
  { displayName: "日本語", code: "jp" },
];

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find((lang) => lang.code === locale)
  );

  const handleLanguageChange = (newLocale: {
    displayName: string;
    code: string;
  }) => {
    router.replace(pathname, { locale: newLocale.code });
    setSelectedLanguage(newLocale);
  };

  return (
    <div className="relative inline-block text-left rounded-md hover:bg-gray-50">
      <Listbox value={selectedLanguage} onChange={handleLanguageChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default bg-white-primary py-2 pl-2 pr-10 text-left rounded-md hover:bg-gray-100 hover:scale-110 active:scale-100 duration-200 sm:text-sm">
            <LanguageIcon className="h-5 w-5 text-gray-900" />
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-fit z-20 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {languages.map((locale, localeIdx) => (
                <Listbox.Option
                  key={localeIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-8 pr-4 ${
                      active ? "bg-green-100 text-green-800" : "text-gray-900"
                    }`
                  }
                  value={locale}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {locale.displayName}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2 primary-0">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
