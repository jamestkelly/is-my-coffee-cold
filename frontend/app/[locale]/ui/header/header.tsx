"use client";

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BugAntIcon,
  DocumentIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { useLocale } from "next-intl";
import { Fragment, useState } from "react";
import translations from '../../../../public/lang/clientTranslations.json';
import CoffeeIcon from "../icons/coffee";
import LocaleSwitch from "../localeSelect/localeSelect";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerTranslations = translations.Header.find(lang => lang.locale === locale);

  const supportItems = [
    {
      name: headerTranslations?.support?.documentation?.title,
      description: headerTranslations?.support?.documentation?.description,
      href: "https://github.com/jamestkelly/is-my-coffee-cold/wiki",
      icon: DocumentIcon,
    },
    {
      name: headerTranslations?.support?.issues?.title,
      description: headerTranslations?.support?.issues?.description,
      href: "https://github.com/jamestkelly/is-my-coffee-cold/issues",
      icon: BugAntIcon,
    },
    {
      name: headerTranslations?.support?.community?.title,
      description: headerTranslations?.support?.community?.description,
      href: "https://github.com/jamestkelly/is-my-coffee-cold/discussions",
      icon: UserGroupIcon,
    },
  ];
  const callsToAction = [
    { name: headerTranslations?.watchDemo?.title, href: "#", icon: PlayCircleIcon },
  ]; // TODO: Replace with current demo video for app

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="-m-1.5 p-1.5 inline-flex items-center justify-center"
          >
            <span className="sr-only">is-my-coffee-cold</span>
            <CoffeeIcon className="h-12 w-auto" />
            <p className="text-gray-900 font-bold px-2">is-my-coffee-cold</p>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{headerTranslations?.openMainMenu}</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 items-center justify-center">
          <a
            href="/support"
            className="text-sm p-2 rounded-md font-semibold leading-6 text-gray-900 hover:bg-gray-50"
          >
            {headerTranslations?.about?.title}
          </a>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 p-2 rounded-md text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
              {headerTranslations?.support?.title}
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-80 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {supportItems.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-green-900"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <LocaleSwitch />
          <div className="bg-primary-0 hover:bg-primary-1 hidden lg:flex lg:flex-1 lg:justify-end py-2 px-8 rounded-xl">
            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-white-primary"
            >
              {headerTranslations?.login?.title}
            </a>
          </div>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="-m-1.5 p-1.5 inline-flex items-center justify-center"
            >
              <span className="sr-only">is-my-coffee-cold</span>
              <CoffeeIcon className="h-12 w-auto" />
              <p className="text-gray-900 font-bold px-2">is-my-coffee-cold</p>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">{headerTranslations?.closeMenu}</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {headerTranslations?.about?.title}
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {headerTranslations?.support?.title}
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2 ">
                        {[...supportItems, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg py-2.5 text-base text-center font-semibold mb-2 bg-primary-0 px-6 pb-2 pt-2.5 leading-7 text-white-primary hover:bg-primary-1"
                >
                  {headerTranslations?.login?.title}
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
