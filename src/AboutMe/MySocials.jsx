import React, { forwardRef } from "react";
import whatsapp from "../assets/socialicons/whatsapp.png";
import linktree from "../assets/socialicons/linkitree.png";
import linkedin from "../assets/socialicons/foliolinkedin.png";
import discord from "../assets/socialicons/discordp.png";
import instagram from "../assets/socialicons/insta3d.png";
import twitter from "../assets/socialicons/3dtweet.png";
import { MdOutlineCancel } from "react-icons/md";

const MySocials = forwardRef((props, ref) => {
  const remMenu = () => {
    const socialsElement = document.getElementById("socials");
    if (socialsElement) {
      socialsElement.classList.remove("prod");
    }
  };

  return (
    <section
      ref={ref}
      id="socials"
      className="glass-box rounded-xl shadow-pink-300 left-[-6%] md:left-[13.5%] py-4 relative shadow-md top-[10%] lg:top-10 
      w-[85vw] md:w-[550px] hidden flex-col items-center"
    >
      <h1 className="font-serif italic text-center text-xl mt-3">My Social Media</h1>

      {/* Social Icons Container */}
      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-4">
        {[
          { src: twitter, alt: "Twitter", link: "https://x.com/Funmi565" },
          { src: whatsapp, alt: "WhatsApp", link: "https://wa.me/YOUR_NUMBER" },
          { src: linktree, alt: "Linktree", link: "https://linktr.ee/fayemi.funmilayo55" },
          { src: discord, alt: "Discord", link: "https://discord.com/YOUR_PROFILE" },
          { src: instagram, alt: "Instagram", link: "https://instagram.com/YOUR_PROFILE" },
        ].map((icon, index) => (
          <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
          <img
            src={icon.src}
            alt={icon.alt}
            className="w-18 h-16 md:w-14 md:h-14 object-contain flex-shrink-0 transition-all duration-300 hover:scale-150"
          />
        </a>
        
        ))}
      </div>

      <h1 className="hidden sm:block font-serif italic text-center text-2xl mt-5">Accounts</h1>

      <button
        className="absolute top-2 right-2 text-white text-lg p-1 rounded-sm cursor-pointer"
        onClick={remMenu}
      >
        <MdOutlineCancel />
      </button>
    </section>
  );
});

export default MySocials;
