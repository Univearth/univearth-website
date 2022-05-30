import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const navigation = [
  { name: '私たちについて', href: '/about' },
  { name: '採用情報', href: '#' },
  { name: 'お知らせ', href: '#' },
  { name: '会社概要', href: '/#information' },
];

const Navbar = () => {
  return (
    <div>
      <div className="relative pt-6 pb-16 sm:pb-12">
        <Popover>
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <nav
              className="flex relative justify-between items-center sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                <div className="flex justify-between items-center w-full md:w-auto">
                  <Link href="/">
                    <a>
                      <span className="sr-only">Workflow</span>
                      <Image
                        className="w-auto h-8 sm:h-10"
                        src="/images/logo-white.svg"
                        alt=""
                        width={185}
                        height={25}
                      />
                    </a>
                  </Link>
                  <div className="flex items-center -mr-2 md:hidden">
                    <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden md:flex md:absolute md:inset-y-0 md:right-0 md:justify-end md:items-center">
                <span className="inline-flex rounded-md shadow">
                  <Link href="/contact">
                    <a className="block py-3 px-5 w-full font-medium text-center text-cyan-800 bg-gray-50 hover:bg-gray-100">
                      お問い合わせ
                    </a>
                  </Link>
                </span>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right md:hidden"
            >
              <div className="overflow-hidden bg-white rounded-lg ring-1 ring-black/5 shadow-md">
                <div className="flex justify-between items-center px-5 pt-4">
                  <div>
                    <Link href="/">
                      <Image
                        className="w-auto h-8 sm:h-10"
                        src="/images/logo-white.svg"
                        alt=""
                        width={185}
                        height={25}
                      />
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <Link href="/contact">
                  <a className="block py-3 px-5 w-full font-medium text-center text-cyan-800 bg-gray-50 hover:bg-gray-100">
                    お問い合わせ
                  </a>
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
