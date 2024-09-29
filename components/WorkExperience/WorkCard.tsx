import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  position: string;
  company: string;
  location: string;
  logo: string;
  period: string;
  learnPoints: string[];
  link?: string;
};

const WorkCard = (props: Props) => {
  const { position, company, logo, period, location, learnPoints, link } = props;

  return (
    // <Link href={link ? link : ""} passHref target="_blank">
      <motion.article
        initial={{
          x: 100,
          y: 100,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          x: 0,
        }}
        className="group antialiased flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 flex-grow-0 sm:w-96 p-10 md:p-2 bg-[#292929] w-fit  max-h-[650px] min-h-[550px] cursor-default"
      >
          {/* Company logo */}
          <motion.div
            initial={{
              x: -50,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
          >
          <Image
            src={props.logo}
            alt="company logo"
            className="mt-6 object-contain object-center group-hover:scale-125 group-hover:drop-shadow-[0_0px_15px_#ffffff2f] transition ease-in-out duration-300 "
            width={100} // Adjust as necessary
            height={100}
            style={{ objectFit: "contain" }} // Ensures logo fits inside the bounds
            priority={true}
          />
        </motion.div>

        <div className="px-0 md:px-10 w-[100%] space-y-2 transition ease-in-out duration-300">
          {/* Position */}
          <h4 className="text-4xl tracking-wider sm:text-3xl font-light cursor-default pb-2">
            {position}
          </h4>
          <hr />
          {/* Company */}
          <p className="uppercase text-yellow-600 text-base font-medium pt-2">
            Company: <span className="text-slate-200">{company}</span>
          </p>
          {/* Period */}
          <p className="uppercase  text-yellow-600 text-base font-medium ">
            Period: <span className="text-slate-200">{period}</span>
          </p>
          <hr />
          {/* Location */}
          <p className="uppercase  text-yellow-600 text-base font-medium ">
            Location: <span className="text-slate-200">{location}</span>
          </p>
          <hr />
          {/* Learn points */}
          <div className="flex flex-wrap">
            {learnPoints.map((item: string, i: number) => {
              return (
                <div
                  key={i}
                  className="border py-2 px-3 rounded-3xl my-2 mx-1 tracking-wider hover:scale-105 transition ease-in-out duration-100 font-light hover:border-[#F7AB0A] hover:text-[#F7AB0A] hover:drop-shadow-[0_0px_20px_#ffffff2f] "
                >
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.article>
    // </Link>
  );
};

export default WorkCard;
