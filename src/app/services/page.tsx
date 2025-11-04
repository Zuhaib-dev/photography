import React from "react";
import TopSec from "./Sections/TopSec";
import ServicesIntroSec from "./Sections/ServicesIntroSec";
import Divider from "@/components/Divider";
import PricingSec from "./Sections/PricingSec";
import {
  servicePriceItems,
  servicePriceItemsSecond,
  servicePriceItemsThird,
} from "@/data/data";
import ServicesCard from "@/components/ServicesCard";

const Services = () => {
  return (
    <>
      <TopSec />
      <ServicesIntroSec
        title="Portrait Photography"
        image="/images/services-banner-1.png"
        description="Our portrait photography service is all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self. We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your story."
      />
      <Divider />
      {/* pricing secion */}
      <section className="section">
        <div className="container grid gap-12">
          {servicePriceItems.map((item) => (
            <div className="grid lg:grid-cols-[0.4fr_1fr] gap-10" key={item.id}>
              <div>
                <PricingSec
                  key={item.id}
                  subtitle={item.subtitle}
                  price={item.price}
                />
              </div>
              <div>
                {item.texts.map((item, index) => (
                  <ServicesCard key={index} label={item.text} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />
      <ServicesIntroSec
        title="Events Photography"
        description="Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day."
        image="/images/services-banner-2.png"
      />
      <Divider />
      {/* pricing secion */}
      <section className="section">
        <div className="container grid gap-12">
          {servicePriceItemsSecond.map((item) => (
            <div className="grid lg:grid-cols-[0.4fr_1fr] gap-10" key={item.id}>
              <div>
                <PricingSec
                  key={item.id}
                  subtitle={item.subtitle}
                  price={item.price}
                />
              </div>
              <div>
                {item.texts.map((item, index) => (
                  <ServicesCard key={index} label={item.text} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />
      <ServicesIntroSec
        title="Commercial Photography"
        description="In the world of business, a compelling image can make all the difference. Our commercial photography service is designed to enhance your brand's visual identity. We create striking images for your products, services, and marketing campaigns that leave a lasting impact on your audience."
        image="/images/services-banner-3.png"
      />
      {/* pricing secion */}
      <section className="section">
        <div className="container grid gap-12">
          {servicePriceItemsThird.map((item) => (
            <div className="grid lg:grid-cols-[0.4fr_1fr] gap-10" key={item.id}>
              <div>
                <PricingSec
                  key={item.id}
                  subtitle={item.subtitle}
                  price={item.price}
                />
              </div>
              <div>
                {item.texts.map((item, index) => (
                  <ServicesCard key={index} label={item.text} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
