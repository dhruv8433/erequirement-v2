import { useTranslations } from "next-intl";

export const ApiUrl = "https://e-requirement-backend-v2.vercel.app/api/v2";
export const BaseUrl = "https://e-requirement-backend-v2.vercel.app/";

// Website Routes
export const routes = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Categories",
    url: "/categories",
  },
  {
    id: 4,
    name: "Providers",
    url: "/providers",
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact",
  },
];

// breakpoints for swiper
export const SwiperBreakPoints = {
  300: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  440: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  840: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 50,
  },
};

export function MyTranslation(translationkey) {
  const t = useTranslations(translationkey);
  return t;
}

export const myPrimaryColor = "#ff9a00";
