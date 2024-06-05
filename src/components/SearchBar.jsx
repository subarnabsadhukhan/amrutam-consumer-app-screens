import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { useSearchParams } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SEARCH_OPTIONS = ["India", "Ghana"];

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = searchParams.get("location") || "";
  const name = searchParams.get("name") || "";

  const [search, setSearch] = useState(name || "");
  return (
    <section className="relative h-56 max-w-full bg-customgreen-100">
      {/* Background Circles */}
      <div className="absolute bottom-[50%] flex h-28 w-full items-end justify-around gap-[30%] overflow-hidden lg:gap-[50%]">
        <div className="h-44 w-44 rounded-[50%] bg-customgreen-300" />
        <div className="h-44 w-44 rounded-[50%] bg-customgreen-300" />
      </div>
      <div className="absolute top-[50%] flex h-28 w-full justify-around gap-[1%] overflow-hidden lg:gap-[20%]">
        <div className="h-44 w-44 rounded-[50%] bg-customgreen-300" />
        <div className="h-44 w-44 rounded-[50%] bg-customgreen-300" />
      </div>

      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="z-10 mx-3 pb-2 text-center font-poppins text-2xl font-medium capitalize leading-[24px] tracking-[0.01em] text-black md:text-[32px]">
          Find Discussions related to Ayurveda here
        </h1>

        <div className="mt-2 flex w-full max-w-full shrink-0 flex-row px-4 py-0 md:w-fit md:px-0">
          <div className="flex max-w-full flex-1 shrink-0 flex-col flex-wrap items-start justify-center gap-0 sm:flex-row sm:gap-2">
            <div className="box-border flex w-full max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-2 sm:w-[445px]">
              <div className="z-10 box-border flex max-w-full flex-row items-start justify-between gap-[18px] self-stretch overflow-hidden rounded-lg border-[1px] border-solid border-customgray-300 bg-white px-[10px] pb-3 pt-2 sm:pb-[13px] sm:pt-[11px]">
                <input
                  className="box-border flex w-full max-w-[calc(100%_-_48px)] flex-col items-start justify-start bg-[transparent] px-0 pb-0 pt-[2.5px] text-base text-gray-600 [border:none] [outline:none] placeholder:text-customgray-500 focus:ring-0"
                  placeholder="Search eg. Category, Question, Doctor profile"
                  type="text"
                  value={search}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      searchParams.set("name", search);
                      setSearchParams(searchParams);
                      setSearch("");
                    }
                  }}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <img
                  className="relative mt-1 h-6 w-7 duration-75 hover:opacity-60 active:scale-90"
                  alt="Search Icon"
                  src="/right-arrow.svg"
                  onClick={() => {
                    searchParams.set("name", search);
                    setSearchParams(searchParams);
                    setSearch("");
                  }}
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start pt-2 sm:w-fit">
              <Menu
                as="div"
                className="relative inline-block w-full text-left sm:w-fit"
              >
                <MenuButton className="relative flex w-full flex-row items-start justify-start sm:w-fit">
                  <div className="z-10 flex w-full flex-row items-start justify-start gap-4 rounded-lg border-[1px] border-solid border-customgray-300 bg-white py-3 pl-3 pr-2.5 sm:w-fit sm:py-[13px]">
                    <div className="relative inline-block w-full text-left text-base leading-[24px] tracking-[0.01em] text-customgray-500 sm:w-fit sm:min-w-[170px]">
                      {location ? location : `Search by category`}
                    </div>
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-0.5">
                      <img
                        src="/chevrondown-icon.svg"
                        className="relative h-6 shrink-0 overflow-hidden"
                      />
                    </div>
                  </div>
                </MenuButton>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="font-dinpro-medium absolute right-0 z-30 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="z-30 py-1">
                      {SEARCH_OPTIONS.length > 0 &&
                        SEARCH_OPTIONS.map((option) => (
                          <div key={option}>
                            <MenuItem>
                              {({ focus }) => (
                                <button
                                  onClick={() => {
                                    searchParams.set("location", option);
                                    setSearchParams(searchParams);
                                  }}
                                  className={classNames(
                                    focus
                                      ? "bg-whitesmoke-100 text-gray-900"
                                      : "text-gray-700",
                                    "block w-full px-4 py-2 text-left text-sm",
                                  )}
                                >
                                  {option}
                                </button>
                              )}
                            </MenuItem>
                          </div>
                        ))}
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;