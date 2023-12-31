import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Facebook from '../../../public/facebook.svg';
import Instagram from '../../../public/instagram.svg'
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative z-50 fixed"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Que esperas para seguirnos !!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Encuentranos en redes sociales y observa mas de nuestro trabajo y amor con el que hacemos lo que mejor que sabemos hacer
        </p>
        <div className="socials flex flex-row gap-2 justify-evenly">
          <Link href="https://www.facebook.com/servitea.antioquia">
            <Image src={Facebook} alt="Github Icon" />
          </Link>
          <Link href="tel:3137206362">
           
            <Image src="/images/phone.png" alt="Github Icon" width={40} height={40} />

          
          </Link>
          <Link href="https://www.instagram.com/servitea_antioquia/?utm_source=qr&igshid=OGIxMTE0OTdkZA%3D%3D">
            <Image src={Instagram} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
