import React from "react";
import { socailLinks } from "../data";
import SocailLink from "./SocailLink";

const SocailLinks = ({ parentClass, itemClass }) => {
  return (
    <div>
      <ul className={parentClass}>
        {socailLinks.map((link) => {
          return <SocailLink key={link.id} {...link} itemClass={itemClass} />;
        })}
      </ul>
    </div>
  );
};

export default SocailLinks;
