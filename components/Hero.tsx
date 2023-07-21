"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)]  grid grid-cols-5">
      {/* 1st coloum */}
      <div className="w-full h-full">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{
              y: "-100%",
            }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/4982737/pexels-photo-4982737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman in Black and Brown Long Sleeve Shirt Raising Her Hand"
              width={300}
              height={300}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* 2st coloum */}
      <div className="w-full h-full "></div>
      {/*3rd coloum */}
      <div className="w-full h-full flex items-center">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{
              y: "-100%",
            }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/2701236/pexels-photo-2701236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman Covering Half of her Face with Hair"
              width={300}
              height={300}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* 4th coloum */}
      <div className="w-full h-full "></div>
      {/* 5th */}
      <div className="w-full h-full  flex items-end">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{
              y: "-100%",
            }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/3925875/pexels-photo-3925875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Yellow Instant Camera on Top of Ripped Paper Pages"
              width={300}
              height={300}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
