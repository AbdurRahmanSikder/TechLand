import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./seller_order.png";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./main_banner.jpg";
import main_banner_bg_sm from "./main_banner_bg_sm.jpg";
import bottom_banner_image from "./bottom_banner.webp";
import bottom_banner_image_sm from "./bottom_banner_bg_sm.jpg";
import add_address_iamge from "./add_address_image.svg";
import mouse_image from "./mouse.png";
import keyboard_image from "./keyboard.png";
import laptop_image from "./laptop.png";
import gpu_image from "./gpu.png";
import monitor_image from "./monitor.png";
import speaker_image from "./speaker.png";
import ram_image from "./ram.png";

export const assets = {
  logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  main_banner_bg,
  main_banner_bg_sm,
  bottom_banner_image,
  bottom_banner_image_sm,
  add_address_iamge,
  box_icon,
};

export const categories = [
  {
    text: "Mouse",
    path: "mouse",
    image: mouse_image,
    bgColor: "#FEF6DA",
  },
  {
    text: "Keyboard",
    path: "keyboard",
    image: keyboard_image,
    bgColor: "#FEE0E0",
  },
  {
    text: "Laptop",
    path: "laptop",
    image: laptop_image,
    bgColor: "#F0F5DE",
  },
  {
    text: "Graphics card",
    path: "Graphics card",
    image: gpu_image,
    bgColor: "#E1F5EC",
  },
  {
    text: "Monitor",
    path: "monitor",
    image: monitor_image,
    bgColor: "#FEE6CD",
  },
  {
    text: "Speaker",
    path: "speaker",
    image: speaker_image,
    bgColor: "#E0F6FE",
  },
  {
    text: "RAM",
    path: "ram",
    image: ram_image,
    bgColor: "#F1E3F9",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const features = [
  {
    icon: delivery_truck_icon,
    title: "Fastest Delivery",
    description: "Groceries delivered in under 30 minutes.",
  },
  {
    icon: coin_icon,
    title: "Affordable Prices",
    description: "Quality groceries at unbeatable prices.",
  },
  {
    icon: trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers.",
  },
];
