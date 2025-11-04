import { RiArrowRightUpLongLine } from "@remixicon/react";
import React from "react";

const ContactSec = () => {
  return (
    <section className="my-[120px]">
      <div className="container grid items-center lg:grid-cols-[0.7fr_1fr] gap-16">
        <div>
          <h2 className="mb-6">Contact Information</h2>
          <p>
            Feel free to reach out to us through various channels. We are
            available by phone, email, and social media for your convenience.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-10">
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="hover:underline">
              +1-123-456-7890
            </a>
            <span>
              <RiArrowRightUpLongLine />
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="hover:underline">
              info@damien braunphotography.com
            </a>
            <span>
              <RiArrowRightUpLongLine />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSec;
