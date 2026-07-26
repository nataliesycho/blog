// Site-wide configuration. Edit these values to make the blog yours.

export const SITE = {
  title: "Natalie Cho",
  // Short tagline shown under your name on the home page.
  description: "Writing on product, technology, and the things I'm figuring out.",
  // Your public URL. Update this once you deploy (used for RSS + SEO).
  url: "https://blog-lilac-five-99.vercel.app",
  author: "Natalie Cho",
  email: "nataliesycho@gmail.com",
};

// Default typography. Flip between "sans" and "serif" to change the whole
// site's feel. There is also a live toggle in the footer so you can compare
// both in the browser — once you decide, set your favorite here and you can
// delete the FontToggle component.
export const DEFAULT_FONT: "sans" | "serif" = "sans";

// Links shown in the header nav.
export const NAV = [
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
];

// Optional social / contact links shown in the footer.
export const SOCIALS = [
  { label: "Email", href: "mailto:nataliesycho@gmail.com" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "RSS", href: "/rss.xml" },
];
