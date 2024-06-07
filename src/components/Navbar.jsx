import { useRef } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";

const NAV_LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Find Doctors",
    path: "/find-doctors",
  },
  {
    name: "Commune",
    path: "/commune",
  },
  {
    name: "About Us",
    path: "/about",
  },
];

const Navbar = () => {
  const ref = useRef(null);
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div>
            <nav className="bg-[#fff7e2]">
              <div className="mx-auto max-w-full px-4 md:px-6">
                <div className="flex h-24 w-full items-center justify-between">
                  <div className="block flex-shrink-0 lg:hidden">
                    <Link to={"/"}>
                      <img className="w-52 sm:w-60" src="/logo.png" />
                    </Link>
                  </div>
                  <div className="hidden w-full lg:flex">
                    <div className="flex w-full flex-row items-center justify-around">
                      <nav className="flex justify-between gap-5 lg:gap-10 xl:gap-16">
                        <Link to={"/"}>
                          <img className="w-56" src="/logo.png" />
                        </Link>
                        <ul className="hidden items-center gap-5 text-xl lg:flex xl:gap-10">
                          {NAV_LINKS.map((item) => (
                            <NavLink to={item.path} key={item.path}>
                              {({ isActive }) => (
                                <li
                                  className={`${isActive ? "text-[22px] font-semibold text-[#3a643b]" : "text-[20px]"} group relative cursor-pointer font-poppins capitalize duration-100 active:scale-95`}
                                >
                                  <span className="whitespace-nowrap leading-[140%]">
                                    {item.name}
                                  </span>
                                  <span
                                    className={`${isActive ? `bg-[#3a643b] group-hover:max-w-full` : "bg-neutral-700 group-hover:max-w-[88%]"} block h-[2.5px] max-w-0 whitespace-nowrap rounded-full transition-all duration-500 ease-in-out`}
                                  ></span>
                                  {/* Invisible pseudo-element to maintain space */}
                                  <span className="p0 invisible relative block h-0 text-[22px] font-bold">
                                    {item.name}
                                  </span>
                                </li>
                              )}
                            </NavLink>
                          ))}
                        </ul>
                      </nav>
                      <div className="flex gap-4 lg:ml-2">
                        <button className="bg-oldlace rounded-xl border-2 border-[#3a643b] px-8 pb-3 pt-2 font-poppins text-2xl text-[#3a643b] transition duration-100 ease-in-out hover:-translate-y-0.5 hover:border-[#4e8750] hover:text-[#4e8750] active:scale-90">
                          Login
                        </button>
                        <button className="whitespace-nowrap rounded-xl bg-[#3a643b] px-8 pb-3 pt-2 font-poppins text-2xl text-white transition delay-75 duration-100 ease-in-out hover:-translate-y-0.5 hover:bg-[#4e8750] active:scale-90">
                          Sign-Up
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex lg:hidden">
                    <DisclosureButton
                      type="button"
                      className="mr-3 inline-flex items-center justify-center rounded-md bg-[#3a643b] p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      aria-controls="mobile-menu"
                      aria-expanded="false"
                    >
                      {!open ? (
                        <svg
                          className="block h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="block h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>

              <Transition
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DisclosurePanel className="lg:hidden" id="mobile-menu">
                  <div ref={ref} className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {NAV_LINKS.map((item) => (
                      <NavLink to={item.path} key={item.path}>
                        {({ isActive }) => (
                          <DisclosureButton
                            className={`w-full text-left font-poppins ${isActive ? `font-semibold text-[#3a643b]` : "text-neutral-700"} block rounded-md px-7 py-2 text-lg capitalize hover:text-black`}
                          >
                            {item.name}
                          </DisclosureButton>
                        )}
                      </NavLink>
                    ))}
                    <div className="ml-7 flex gap-2 pt-3">
                      <DisclosureButton className="bg-oldlace block w-28 rounded-lg border-2 border-[#3a643b] px-1.5 pb-2 pt-1 font-poppins text-xl text-[#3a643b]">
                        Login
                      </DisclosureButton>
                      <DisclosureButton className="block w-28 rounded-lg bg-[#3a643b] px-1.5 pb-2 pt-1 font-poppins text-xl text-white">
                        Sign-Up
                      </DisclosureButton>
                    </div>
                  </div>
                </DisclosurePanel>
              </Transition>
            </nav>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
