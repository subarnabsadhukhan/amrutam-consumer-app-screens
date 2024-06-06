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

const SEARCH_CATEGORIES = [
  {
    main: "General Ayurveda",
    sub: [
      "Basics of Ayurveda",
      "History and Philosophy",
      "Doshas (Vata, Pitta, Kapha)",
      "Ayurvedic Lifestyle",
      "Others",
    ],
  },
  {
    main: "Ayurvedic Treatments",
    sub: [
      "Herbal Remedies",
      "Panchakarma",
      "Detoxification",
      "Rejuvenation Therapies",
    ],
  },
  {
    main: "Diet and Nutrition",
    sub: [
      "Ayurvedic Diet Principles",
      "Seasonal Eating",
      "Food for Specific Doshas",
      "Recipes and Meal Plans",
    ],
  },
  {
    main: "Health Conditions and Ayurveda",
    sub: [
      "Digestive Issues",
      "Skin Problems",
      "Respiratory Ailments",
      "Chronic Diseases (e.g., Diabetes, Arthritis)",
      "Mental Health",
      "List of Concerns",
    ],
  },
  {
    main: "Ayurvedic Herbs and Ingredients",
    sub: [
      "Common Herbs (e.g., Ashwagandha, Turmeric)",
      "Herbal Preparations",
      "Medicinal Properties",
      "Sourcing and Quality",
    ],
  },
  {
    main: "Ayurvedic Practices",
    sub: [
      "Yoga and Ayurveda",
      "Meditation Techniques",
      "Daily Routines (Dinacharya)",
      "Seasonal Routines (Ritucharya)",
    ],
  },
  {
    main: "Consultation and Personal Experiences",
    sub: [
      "Finding an Ayurvedic Practitioner",
      "Personal Healing Stories",
      "Success Stories",
      "Challenges and Advice",
    ],
  },
  {
    main: "Modern Ayurveda",
    sub: [
      "Integration with Western Medicine",
      "Research and Studies",
      "Innovations and Trends",
      "Ayurveda in Different Cultures",
    ],
  },
  {
    main: "Ayurvedic Products and Brands",
    sub: [
      "Reviews and Recommendations",
      "DIY Ayurvedic Products",
      "Quality and Safety",
      "Where to Buy",
    ],
  },
  {
    main: "Spirituality and Ayurveda",
    sub: [
      "Connection between Body, Mind, and Spirit",
      "Spiritual Practices",
      "Mantras and Chants",
      "Ayurvedic Astrology (Jyotish)",
    ],
  },
  {
    main: "FAQs and Troubleshooting",
    sub: [
      "Common Questions",
      "Myths and Misconceptions",
      "Troubleshooting Issues",
      "Tips and Tricks",
    ],
  },
  {
    main: "Events and Workshops",
    sub: [
      "Upcoming Events",
      "Workshops and Seminars",
      "Webinars",
      "Community Gatherings",
    ],
  },
];

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const subCategory = searchParams.get("subCategory") || "";
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

        <div className="mx-4 mt-2 flex w-full max-w-full shrink-0 flex-row px-4 py-0 md:w-fit md:px-0">
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
            <div className="flex w-full flex-col items-start justify-start pt-2 sm:w-fit sm:max-w-[50%]">
              <Menu
                as="div"
                className="relative inline-block w-full text-left sm:w-fit"
              >
                <MenuButton className="relative flex w-full flex-row items-start justify-start sm:w-fit">
                  <div className="z-10 flex w-full flex-row items-start justify-start gap-4 rounded-lg border-[1px] border-solid border-customgray-300 bg-white py-3 pl-3 pr-2.5 sm:w-fit sm:py-[13px]">
                    <div className="relative inline-block w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-base leading-[24px] tracking-[0.01em] text-customgray-500 sm:w-fit sm:min-w-[170px]">
                      {subCategory ? subCategory : `Search by category`}
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
                  <MenuItems className="custom-scrollbar absolute right-0 z-30 mt-2 h-72 w-56 origin-top-right overflow-auto rounded-md bg-white font-poppins shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="z-30 py-1">
                      {SEARCH_CATEGORIES.length > 0 &&
                        SEARCH_CATEGORIES.map((category) => (
                          <div key={category.main} className="my-1">
                            <span className="block w-full px-4 pb-1 pt-5 text-left font-poppins text-sm font-bold">
                              {category.main}
                            </span>
                            {category.sub.map((subCategory) => (
                              <MenuItem key={subCategory}>
                                {({ focus }) => (
                                  <button
                                    onClick={() => {
                                      searchParams.set(
                                        "subCategory",
                                        subCategory,
                                      );
                                      searchParams.set(
                                        "mainCategory",
                                        category.main,
                                      );
                                      setSearchParams(searchParams);
                                    }}
                                    className={classNames(
                                      focus
                                        ? "bg-whitesmoke-100 text-gray-900"
                                        : "text-gray-700",
                                      "block w-full rounded-r-md px-4 py-1.5 text-left font-poppins text-sm hover:bg-neutral-100",
                                    )}
                                  >
                                    {subCategory}
                                  </button>
                                )}
                              </MenuItem>
                            ))}
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
