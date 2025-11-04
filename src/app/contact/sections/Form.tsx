import React from "react";
import Title from "@/components/Title";
import Input from "./InputField";
import InputField from "./InputField";
import Button from "@/components/Button";
const Form = () => {
  return (
    <section className="py-16 mb-40">
      <div className="container grid lg:grid-cols-[0.7fr_1fr] gap-16">
        {/* Title */}
        <div>
          <Title title="Send Me a Message" />
          <p className="mt-6">
            Have a specific inquiry or message for us? Please use the contact
            form below, and we'll get back to you promptly.
          </p>
        </div>
        {/* Form */}
        <form action="#" className="grid gap-10">
          {/* Wrapper */}
          <div className="grid gap-10 lg:grid-cols-2 mt-10">
            {/* input flield */}
            <Input
              htmlFor="name"
              label="first name"
              type="text"
              id="name"
              placeholder="First name"
            />
            {/* input flield */}
            <Input
              htmlFor="name"
              label="last name"
              type="text"
              id="name"
              placeholder="Last name"
            />
          </div>

          {/* wrapper */}
          <div className="grid gap-10 lg:grid-cols-2 mt-10">
            {/* input field */}
            <Input
              htmlFor="email"
              label="email"
              type="email"
              id="email"
              placeholder="Email"
            />
            {/* input field */}
            <Input
              htmlFor="number"
              label="Phone Number"
              type="number"
              id="number"
              placeholder="phone number"
            />
          </div>

          {/* textarea */}
          <textarea
            name="textarea"
            placeholder="Message"
            className="resize-none h-[100px] border-b border-neutral-800 focus:border-neutral-400 focus:border-b  outline-0 transition-colors"
          ></textarea>

          {/* submit button */}
          <div className="">
            <Button label="Send Message" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
