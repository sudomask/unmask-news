import type { Link } from "../types";

export const SITE = {
  title: "Unmask News",
  description: "A news website built for those who want the truth.",
  author: "The Unmask News Team",
  url: "https://unmasknews.com",
  twitter: "https://twitter.com/unmasknews",
  locale: "en-US",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/technology",
    text: "Technology",
  },
  {
    href: "/categories/politics",
    text: "Politics",
  },
  {
    href: "/categories/lifestyle",
    text: "Lifestyle",
  },
  {
    href: "/categories/productivity",
    text: "Productivity",
  },
  {
    href: "/categories/health",
    text: "Health",
  },
  {
    href: "/categories/finance",
    text: "Finance",
  },
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "About us",
  },
  {
    href: "/authors",
    text: "Authors",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/privacy",
    text: "Privacy",
  },
  {
    href: "/terms",
    text: "Terms",
  },
  {
    href: "/cookie-policy",
    text: "Cookie Policy",
  },
  {
    href: "https://unmasknews.com/rss.xml",
    text: "RSS",
  },
  {
    href: "https://unmasknews.com/sitemap-index.xml",
    text: "Sitemap",
  },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://github.com",
    text: "GitHub",
    icon: "github",
  },
  {
    href: "httpe://www.t.me",
    text: "Telegram",
    icon: "telegram",
  },
  {
    href: "https://twitter.com/unmasknews",
    text: "Twitter",
    icon: "newTwitter",
  },
  {
    href: "https://www.facebook.com",
    text: "Facebook",
    icon: "facebook",
  },
];
