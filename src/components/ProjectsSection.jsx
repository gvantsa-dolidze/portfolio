"use client";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "W3School (Old version)",
    description:
      "A recreated old-school W3Schools interface built to demonstrate vintage web design and HTML/CSS fundamentals.",
    image: "/pictures/gvantsa-dolidze.github.io_w3schools_.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://gvantsa-dolidze.github.io/w3schools/",
    githubUrl:
      "https://github.com/gvantsa-dolidze/gvantsa-dolidze.github.io/tree/main/w3schools",
  },
  {
    id: 2,
    title: "TBCxUSAID",
    description:
      "A fully funded online tech-education initiative by TBC and USAID offering practical ICT courses and job opportunities.",
    image: "/pictures/gvantsa-dolidze.github.io_tbcxusaid_.png",
    tags: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://gvantsa-dolidze.github.io/tbcxusaid/",
    githubUrl: "https://github.com/gvantsa-dolidze/tbcxusaid",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "A sleek modern e-commerce demo built with React to showcase shopping cart flows, product browsing, and real-world functionality.",
    image: "/pictures/ecommerce-cyan-eight.vercel.app_.png",
    tags: ["React", "TypeScript", "Tailwind"],
    demoUrl: "https://ecommerce-cyan-eight.vercel.app/",
    githubUrl: "https://github.com/gvantsa-dolidze/final-project",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div
                className="relative h-[420px] md:h-[480px] flex items-end justify-center text-white rounded-2xl overflow-hidden group"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-700 group-hover:from-black/90" />

                {/* Text Content with background */}
                <motion.div
                  className="relative z-10 p-6 md:p-10 max-w-2xl text-center mx-auto
                             bg-black/50 backdrop-blur-md rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex justify-center gap-2 mb-3 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border border-white/30 rounded-full bg-white/10 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mb-6">
                    {project.description}
                  </p>

                  <div className="flex justify-center gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="px-5 py-2 rounded-full border border-white/50 text-white font-semibold hover:bg-white/20 hover:backdrop-blur-md transition-all duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <a
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white font-medium hover:scale-105 hover:shadow-md transition-all duration-300"
            target="_blank"
            href="https://github.com/gvantsa-dolidze"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Custom pagination style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(
            to right,
            rgb(99 102 241),
            rgb(168 85 247),
            rgb(236 72 153)
          );
          opacity: 1;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
};
