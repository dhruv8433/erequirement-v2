import {
  BusinessOutlined,
  ContactPageOutlined,
  DeleteOutline,
  FavoriteBorderOutlined,
  HandymanOutlined,
  HomeOutlined,
  InfoOutlined,
  LocalMallOutlined,
  LogoutOutlined,
  MiscellaneousServicesOutlined,
  NotificationsOutlined,
  StarOutline,
} from "@mui/icons-material";

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

export const myPrimaryColor = "#ff9a00";

export const steps = [
  "Review Cart",
  "Select Date and Time",
  "Enter Address",
  "Payment",
];

export const ProfileLinks = [
  {
    id: 1,
    name: "orders",
    link: "orders",
    icon: <LocalMallOutlined />,
  },
  {
    id: 2,
    name: "addresses",
    link: "addresses",
    icon: <BusinessOutlined />,
  },
  {
    id: 3,
    name: "wishlists",
    link: "wishlists",
    icon: <FavoriteBorderOutlined />,
  },
  {
    id: 4,
    name: "reviews",
    link: "reviews",
    icon: <StarOutline />,
  },
  {
    id: 5,
    name: "notifications",
    link: "notifications",
    icon: <NotificationsOutlined />,
  },
  {
    id: 6,
    name: "logout",
    link: "",
    icon: <LogoutOutlined />,
  },
  {
    id: 7,
    name: "delete_account",
    link: "delete-account",
    icon: <DeleteOutline color="error" />,
  },
];

export const errorMessages = {
  wentWrong: "Something went wrong! Please try again later.",
  feildsRequire: "All feilds are required!",
  CartAdd: "Please add items to the cart before proceeding.",
  selectDateTime: "Please select date and time before proceeding.",
  scheduleFailed: "Failed to create schedule. Please try again.",
  addAddress: "Please select or add a new address before payment.",
  loginError: "Something went wrong! Please check your credentials.",
  uploadAvatar: "Please upload your avatar.",
  promocode: "Invalid Promocode.",
  promocodeSuccess: "Promocode applied successfully.",
  loginForAdd: "Please login to add item to cart.",
  phoneLength: "Phone number must be 10 digits.",
};
