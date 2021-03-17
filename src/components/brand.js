import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Brand = ({ className }) => {
  return (
    <Link
      aria-label="Go to homepage"
      className={"flex items-center " + className}
      to="/"
    >
      <StaticImage
        placeholder="blurred"
        src="../images/developer-ruhul.jpg"
        width={48}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Ruhul Amin"
        className="rounded-full mr-2"
      />
      <span className="text-gray-900 font-bold tracking-tighter">
        Developer Ruhul
      </span>
    </Link>
  );
};

export default Brand;
