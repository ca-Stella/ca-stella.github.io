import { ProjectPage } from "../layout/ProjectPage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { parts } from "./CogniaParts";
import "../styles/index.css";

// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import "swiper/modules/navigation.min.css";
// import "swiper/modules/pagination.min.css";

export default function Cognia() {
  return (
    <ProjectPage
      title="Study Pattern Dashboard"
      className="bg-white h-auto"
      textEmphasisColor="text-[#a188de]"
    >
      <div className="w-full max-w-5xl p-6 flex flex-col gap-5 items-start justify-center space-y-6 text-base text-gray-700 leading-relaxed overflow-hidden">
        <p>
          Cognia is an ongoing personal project, focused on making a
          student-centered note-taking app, derived from ideas and thoughts from
          real students. I wanted an app that would have all the capabilities
          that students love from other note-taking apps, while making it as
          simple and intuitive to use as possible.

          I used Apple's Swift tutorials to learn about the best practices in app development and recommended development patterns!
        </p>
        <div className="h-full w-full border-2 border-light-green rounded-xl p-4 bg-white ">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            // navigation={{
            //   nextEl: ".next-btn",
            //   prevEl: ".prev-btn",
            // }}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            watchOverflow={true}
            breakpoints={{
    0: {
      direction: "vertical"
    },
    768: {
      direction: "horizontal"
    }
  }}
            className="w-full h-[80vh] md:h-[50vh] overflow-hidden"
          >
            {parts.map((part, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="h-full overflow-y-auto rounded-xl p-6 py-16 md:p-4 md:px-16 bg-white ">
                  {part.content}
                </div>
              </SwiperSlide>
            ))}

         
          </Swiper>
        </div>
      </div>
    </ProjectPage>
  );
}
