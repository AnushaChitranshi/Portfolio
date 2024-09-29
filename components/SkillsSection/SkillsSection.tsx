// @ts-nocheck

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Skills() {
  const [skillName, setSkill] = useState<string>();

  useEffect(() => {
    const nodes = [].slice.call(document.querySelectorAll("li"), 0);

    const directions = { 0: "top", 1: "right", 2: "bottom", 3: "left" };
    const classNames = ["in", "out"]
      .map((p) => Object.values(directions).map((d) => `${p}-${d}`))
      .reduce((a, b) => a.concat(b));

    const getDirectionKey = (ev, node) => {
      const { width, height, top, left } = node.getBoundingClientRect();
      const l = ev.pageX - (left + window.pageXOffset);
      const t = ev.pageY - (top + window.pageYOffset);
      const x = l - (width / 2) * (width > height ? height / width : 1);
      const y = t - (height / 2) * (height > width ? width / height : 1);
      return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    };

    class Item {
      constructor(element) {
        this.element = element;

        this.element.addEventListener("mouseover", (ev) =>
          this.update(ev, "in"),
        );

        this.element.addEventListener("mouseout", (ev) =>
          this.update(ev, "out"),
        );
      }
      
      update(ev, prefix) {
        this.element.classList.remove(...classNames);

        this.element.classList.add(
          `${prefix}-${directions[getDirectionKey(ev, this.element)]}`,
        );
      }
    }

    nodes.forEach((node) => new Item(node));
  }, []);

  const skillsData = [
    { skillName: "Javascript", proficiency: "80", imageLink: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { skillName: "TypeScript", proficiency: "80", imageLink: "https://i.ibb.co/V3Fw2Ft/Typescript-logo-2020-svg.png" },
    { skillName: "HTML", proficiency: "90", imageLink: "https://i.ibb.co/ZXpZGFG/Screenshot-2023-07-07-223352.png" },
    { skillName: "CSS", proficiency: "80", imageLink: "https://i.ibb.co/tq84XMc/css.png" },
    { skillName: "Framer Motion", proficiency: "50", imageLink: "https://i.ibb.co/C2X2KyM/70574400-9e6a-11e9-8708-22d4bf4c3322.png" },
    { skillName: "Tailwind", proficiency: "90", imageLink: "https://i.ibb.co/mD3rstb/z8hzeszc9eb3sp3vp3qc.jpg" },
    { skillName: "React", proficiency: "70", imageLink: "https://i.ibb.co/YyGmCM0/react.png" },
    { skillName: "Next.js", proficiency: "70", imageLink: "https://i.ibb.co/3vDj7JL/Next-js-900x0.png" },
    { skillName: "Bootstrap", proficiency: "90", imageLink: "https://i.ibb.co/s2jDQjS/1on-Zh-QJU7-A3ab6-V1s-Hf-MRk-Q.webp" },
    { skillName: "Photoshop", proficiency: "70", imageLink: "https://i.ibb.co/H7vKjcW/Untitled.png" },
    { skillName: "GitHub", proficiency: "70", imageLink: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
    { skillName: "Python", proficiency: "60", imageLink: "https://i.ibb.co/mBKKN4S/python-logo-4k-i6-1600x1200.jpg" },
    { skillName: "Node.js", proficiency: "60", imageLink: "https://i.ibb.co/rQS8r4P/node-js.png" },
    { skillName: "Express.js", proficiency: "60", imageLink: "https://i.ibb.co/MBHgZ74/expressjs-logo-icon-169185.png" },
    { skillName: "MongoDB", proficiency: "60", imageLink: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld" },
  ];

  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default ">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm cursor-default ">
        hover for proficiency
      </h3>
      <div className="w-[90vw] h-[60vh] md:w-[40vw] flex justify-center items-center z-20">
        <div className={`container`}>
          <ul className={`scale-[70%] md:scale-100 `}>
            {skillsData.map((item, key) => {
              return (
                <motion.li
                  key={key}
                  className="rounded-lg antialiased self-center"
                  onMouseEnter={() => {
                    setSkill(item.skillName);
                  }}
                  onMouseLeave={() => {
                    setSkill("");
                  }}
                  initial={{
                    x: key % 2 === 0 ? 100 : -100,
                  }}
                  whileInView={{
                    y: 0,
                    x: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <a className="normal rounded-lg overflow-hidden antialiased" href="#">
                    <Image
                      src={item.imageLink}
                      alt="skillImage"
                      fill
                      priority
                    />
                  </a>
                  <div className="info antialiased flex justify-center items-center">
                    <h3>{item.proficiency}</h3>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12 flex items-end justify-start xl:items-start xl:justify-end ">
        <h3 className="w-[35vw] sm:w-[32vw] h-fit text-xl md:text-[7vh] md:text-5xl text-gray-500/50 uppercase p-4 pt-11 pb-6 tracking-[20px] transition-all ease-in-out duration-150 animate-[bounce_2s_ease-in-out_infinite]">
          {skillName}
        </h3>
      </div>
    </div>
  );
}

export default Skills;
