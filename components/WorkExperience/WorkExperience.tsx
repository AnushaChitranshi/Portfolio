import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { EffectCoverflow, Pagination, EffectCards } from "swiper/modules";
import WorkCard from "./WorkCard";

const Experiences: React.FC = () => {
  const workExperiences = [
    {
      position: "Software Engineering Intern",
      company: "Kroger Co.",
      logo: "/Logo-Kroger.png", 
      period: "Sep 2024 - Present",
      location: "Blue Ash, OH",
      learnPoints: [
        "Azure",
        "Databricks",
        "Agile",
        "Terraform",
        "SQL",
        "Docker",
        "Data Engineering",
      ],
    },
    {
      position: "Cloud Ops Engineering Intern",
      company: "Levi Strauss & Co.",
      logo: "/Levi's_logo.png", 
      period: "June 2022 - Dec 2023",
      location: "San Francisco, CA",
      learnPoints: [
        "GCP",
        "AWS",
        "Datadog",
        "Jenkins",
        "DevOps",
        "Terraform",
        "IaS",
        "Agile",
      ],
    },
    {
      position: "Research Assistant",
      company: "CERN",
      logo: "/CERN-Logo.png", 
      period: "Jan 2023 - May 2023",
      location: "Geneva, Switzerland",
      learnPoints: [
        "Python",
        "C++",
        "Linux",
        "Git",
        "Data Analysis"
      ],
    },
    {
      position: "Resident Advisor",
      company: "University of Cincinnati",
      logo: "/uc_logo.png",
      location: "Cincinnati, OH",
      period: "Aug 2020 - Apr 2022",
      learnPoints: [
        "Conflict Resolution",
        "Communication",
        "Diversity",
        "Community",
        "Leadership",
      ],
    },
    {
      position: "President",
      company: "Association for Computing Machinery for Women (ACM-W)",
      logo: "/acmw_logo.svg", 
      location: "Cincinnati, OH",
      period: "Sep 2023 - Aug 2024",
      learnPoints: [
        "Leadership",
        "Advocacy",
        "Strategy",
        "Networking",
        "Program Development",
      ],
    },
    {
      position: "Peer Tutor",
      company: "University of Cincinnati",
      logo: "/uc_logo.png", 
      location: "Cincinnati, OH",
      period: "Jan 2020 - Apr 2024",
      learnPoints: [
        "Tutoring",
        "Communication",
        "Time Management",
        "Teaching",
        "Independent Learning",
      ],
    }
  ];

  return (
    <div className="h-screen w-screen flex relative flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-20 pb-2">
      <h3 className="absolute top-24 uppercase tracking-[12px] sm:tracking-[20px] text-gray-500 text-2xl cursor-default">
        Work Experiences
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm cursor-default">
        Swipe to explore
      </h3>

      <div className="flex items-center w-[100vw] sm:w-auto">
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // Connects custom pagination
          type: "bullets",
        }}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCards, EffectCoverflow, Pagination]}
        className="top-20 mx-2 md:top-24 xl:top-24 w-[100%] scale-[0.9] md:scale-[1] xl:scale-[0.85] touch-none"
        style={{ paddingTop: "10px", paddingBottom: "35px" }}
      >
        {workExperiences.map((item, key) => (
          <SwiperSlide
            style={{
              width: "fit-content",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            key={key}
          >
            <WorkCard
              position={item.position}
              company={item.company}
              location={item.location}
              logo={item.logo}
              period={item.period}
              learnPoints={item.learnPoints}
            />
          </SwiperSlide>
        ))}
        {/* Custom Pagination */}
        <div className="custom-pagination absolute bottom-4 flex justify-center w-full">
          <div className="swiper-pagination-bullets flex space-x-2">
            {/* Each dot now is bigger and juicier */}
            <span className="w-7 h-7 bg-white rounded-full opacity-70 hover:opacity-100 transition-all"></span>
            <span className="w-7 h-7 bg-white rounded-full opacity-70 hover:opacity-100 transition-all"></span>
            <span className="w-7 h-7 bg-white rounded-full opacity-70 hover:opacity-100 transition-all"></span>
          </div>
        </div>
      </Swiper>
    </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Experiences;
