// list menu
export const listMenu = [
  { id: 1, label: "profile", link: "/profile" },
  { id: 2, label: "news", link: "/news" },
  { id: 3, label: "discography", link: "/discography" },
  { id: 4, label: "video", link: "/video" },
  { id: 5, label: "schedule", link: "/schedule" },
  { id: 6, label: "contact", link: "/contact" },
];

import {
  jiu,
  sua,
  siyeon,
  handong,
  yoohyeon,
  dami,
  gahyun,
} from "../assets/img/members";

// Members name
export const members = [
  { id: 1, name: "JiU", born: "May 17th, 1994", photo: jiu },
  { id: 2, name: "SuA", born: "August 10th, 1994", photo: sua },
  { id: 3, name: "Siyeon", born: "October 1st, 1995", photo: siyeon },
  { id: 4, name: "Handong", born: "March 26th, 1996", photo: handong },
  { id: 5, name: "Yoohyeon", born: "January 7th, 1997", photo: yoohyeon },
  { id: 6, name: "Dami", born: "March 7th, 1997", photo: dami },
  { id: 7, name: "Gahyun", born: "February 3rd, 1999", photo: gahyun },
];

import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaSpotify,
} from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { SiApplemusic, SiYoutubemusic, SiAmazonmusic } from "react-icons/si";

// Social media icon
export const socialMedia = [
  { id: 1, label: FaYoutube },
  { id: 2, label: FaInstagram },
  { id: 3, label: FaTiktok },
  { id: 4, label: FaXTwitter },
  { id: 5, label: FaFacebookF },
  { id: 6, label: FaThreads },
];

export const streamPlatform = [
  { id: 1, label: FaSpotify },
  { id: 2, label: SiApplemusic },
  { id: 3, label: SiYoutubemusic },
  { id: 4, label: SiAmazonmusic },
];
