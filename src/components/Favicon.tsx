import { useEffect } from "react";
import logo from "@/assets/logo.png";

const Favicon = () => {
  useEffect(() => {
    const setIcon = (rel: string, href: string, type?: string) => {
      let link = document.querySelector<HTMLLinkElement>(`link[rel='${rel}']`);
      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
      if (type) link.type = type;
    };

    // Set primary favicon and shortcut icon
    setIcon("icon", logo, "image/png");
    setIcon("shortcut icon", logo, "image/png");

    // Optional: Apple touch icon
    setIcon("apple-touch-icon", logo);
  }, []);

  return null;
};

export default Favicon;
