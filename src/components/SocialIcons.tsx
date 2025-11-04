import React from "react";
import { socialLinks } from "@/data/data";
const SocialIcons = () => {
  return (
    <div className="flex gap-2 border-neutral-800 border max-w-max p-1 rounded-full items-center">
      {socialLinks.map((item, index) => (
        <a
          href="#"
          target="_blank"
          className="w-10 h-10 bg-neutral-800 flex items-center justify-center rounded-full aspect-square hover:bg-neutral-700 transition-colors"
          key={index}
        >
          {<item.icon />}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
