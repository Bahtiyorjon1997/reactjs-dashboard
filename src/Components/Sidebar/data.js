import {
  FiCalendar,
  FiMessageSquare,
  FiMail,
  FiCheckSquare,
  FiStar,
  FiUser,
} from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";

export const logo = [
  {
    label: "Vuexy",
    icon:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg",
  },
];

export const data = [
  {
    id: "1",
    name: "Email",
    urls: "/email/",
    icon: <FiMail />,
  },
  {
    id: "2",
    name: "Chat",
    urls: "/chat/",
    icon: <FiMessageSquare />,
  },
  {
    id: "3",
    name: "Todo",
    urls: "/Todo/",
    icon: <FiCheckSquare />,
  },
  {
    id: "4",
    name: "Calendar",
    urls: "/Calendar/",
    icon: <FiCalendar />,
  },
  {
    id: "5",
    name: "Invoice",
    urls: "/Invoice/",
    icon: <FiCheckSquare />,
    subItems: ["List", "Preview", "Edit", "Add"],
  },
  {
    id: "6",
    name: "eCommerce",
    urls: "/eCommerce/",
    icon: <BiShoppingBag />,
    subItems: ["List", "Preview", "Edit", "Add"],
  },
  {
    id: "7",
    name: "User",
    urls: "/User/",
    icon: <FiUser />,
    subItems: ["List", "Preview", "Edit", "Add"],
  },
  {
    id: "8",
    name: "Pages",
    urls: "/Pages/",
    icon: <FiCheckSquare />,
    subItems: ["List", "Preview", "Edit", "Add"],
  },
];
