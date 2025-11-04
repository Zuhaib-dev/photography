import React from "react";
import TopSec from "./sections/TopSec";
import ContactSec from "./sections/ContactSec";
import Divider from "@/components/Divider";
import Form from "./sections/Form";
import TestimonialsCard from "@/components/TestimonialsCard";
const Contact = () => {
  return (
    <>
      <TopSec />
      <ContactSec />
      <Divider />
      <Form />
      <TestimonialsCard />
    </>
  );
};

export default Contact;
