import React from "react";
import { Facebook } from "./svgs/Facebook";
import { Instagram } from "./svgs/Instagram";

const link = (Comp: JSX.Element, href: string): JSX.Element => {
    return (
        <a href={href} className="hoverable">
            {Comp}
        </a>
    );
}
export const SocialBar: React.FC = () => {

    return (
        <section className="social-media flex" id="social-media">
            {link(<Facebook />, 'https://www.facebook.com/losjalapenosnp/')}
            {link(<Instagram />, 'https://www.instagram.com/losjalapenos_newpaltz/')}
        </section>
    );
}