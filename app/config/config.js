import {
  ContactPageOutlined,
  HandymanOutlined,
  HomeOutlined,
  InfoOutlined,
  MiscellaneousServicesOutlined,
} from "@mui/icons-material";
import { useTranslations } from "next-intl";

export const ApiUrl = "https://e-requirement-backend-v2.vercel.app/api/v2";
export const BaseUrl = "https://e-requirement-backend-v2.vercel.app/";

export const WebName = "ERequirement";

// Website Routes
export const routes = [
  {
    id: 1,
    name: "Home",
    url: "",
    icon: <HomeOutlined fontSize="small" />,
  },
  {
    id: 2,
    name: "About",
    url: "about",
    icon: <InfoOutlined fontSize="small" />,
  },
  {
    id: 3,
    name: "Categories",
    url: "categories",
    icon: <MiscellaneousServicesOutlined fontSize="small" />,
  },
  {
    id: 4,
    name: "Providers",
    url: "providers",
    icon: <HandymanOutlined fontSize="small" />,
  },
  {
    id: 5,
    name: "Contact",
    url: "contact",
    icon: <ContactPageOutlined fontSize="small" />,
  },
];

// breakpoints for swiper
export const SwiperBreakPoints = {
  300: {
    slidesPerView: 1,
    spaceBetween: 5,
  },
  440: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  840: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
};

export function MyTranslation(translationkey) {
  const t = useTranslations(translationkey);
  return t;
}

export const myPrimaryColor = "#ff9a00";
