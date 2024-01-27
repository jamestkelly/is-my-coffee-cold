import { LinkButtonProps } from "@/lib/interfaces/button";
import React from "react";

const LinkButton: React.FC<LinkButtonProps> = ({
  displayText,
  href,
  linkClassName,
  className,
}) => {
  const defaultStyle =
    "bg-primary-0 hover:bg-primary-1 text-white font-bold py-2 px-4 rounded";
  const defaultLinkStyle =
    "text-base font-semibold leading-6 text-white-primary";

  return (
    <div className={`${className ? className : defaultStyle}`}>
      <a
        href={href}
        className={`${linkClassName ? linkClassName : defaultLinkStyle}`}
      >
        {displayText}
      </a>
    </div>
  );
};

export default LinkButton;
