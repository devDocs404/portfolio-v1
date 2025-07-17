import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Smartphone, Zap, Users } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import { FaAws, FaGitlab, FaTools } from "react-icons/fa";

export default function ModernAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "2.5+", label: "Years Experience", icon: Zap },
    { number: "10+", label: "Projects Completed", icon: Code },
    { number: "08+", label: "Projects Deployed", icon: Smartphone },
    { number: "05+", label: "Happy Clients", icon: Users },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Tech stack with icons and brand colors
  const techStackTop = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  ];
  const techStackBottom = [
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "CI/CD", icon: FaTools, color: "#4B32C3" },
    { name: "GitLab CI/CD", icon: FaGitlab, color: "#FC6D26" },
  ];

  return (
    <section
      id="about"
      className="py-32 bg-black relative overflow-hidden"
      aria-label="About Me section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">About Me</span>
            </div>
            <h2
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
              id="about-title"
            >
              About My
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A passionate Web Engineer focused on building intuitive,
              high-performance web applications. I thrive in collaborative
              teams, enjoy solving complex UI challenges, and am always eager to
              explore new technologies that enhance user experience.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            as="ul"
            role="list"
          >
            {stats.map((stat, index) => (
              <motion.li
                key={index}
                className="relative group list-none"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                tabIndex={0}
                aria-label={`${stat.number} ${stat.label}`}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center hover:border-cyan-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.div>

          {/* About Content */}
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h3
                className="text-3xl font-bold text-white mb-6"
                id="professional-background-title"
              >
                My Professional Background
              </h3>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  With over 2.5 years of experience in frontend development, I
                  specialize in React and have delivered 10+ applications across
                  sectors such as government, healthcare, and fitness tech.
                </p>
                <p>
                  I’m dedicated to writing clean, maintainable code and adhering
                  to best practices. I’ve collaborated with cross-functional
                  teams, contributed to code reviews, and mentored junior
                  developers.
                </p>
                <p>
                  I actively stay updated with the latest frontend trends and
                  continuously seek opportunities to grow while contributing to
                  impactful, user-focused projects.
                </p>
              </div>
            </div>

            <div className="relative">
              <motion.div
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4
                  className="text-xl font-semibold text-white mb-6 text-center"
                  id="tech-stack-title"
                >
                  Tech Stack
                </h4>
                <div className="overflow-hidden w-full">
                  {/* Top Row: scrolls left */}
                  <div className="relative py-2">
                    <div className="flex gap-6 animate-marquee whitespace-nowrap">
                      {techStackTop.concat(techStackTop).map((tech, index) => (
                        <div
                          key={"top-" + index}
                          className="bg-white/5 rounded-lg px-6 py-3 text-center text-gray-300 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 flex flex-col items-center gap-2 mx-2 min-w-[120px]"
                          tabIndex={0}
                          style={{ cursor: "pointer" }}
                        >
                          <tech.icon
                            size={32}
                            color={tech.color}
                            aria-label={tech.name}
                          />
                          <span
                            className="mt-1 text-base font-medium"
                            style={{ color: tech.color }}
                          >
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Bottom Row: scrolls right */}
                  <div className="relative py-2">
                    <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap">
                      {techStackBottom
                        .concat(techStackBottom)
                        .map((tech, index) => (
                          <div
                            key={"bottom-" + index}
                            className="bg-white/5 rounded-lg px-6 py-3 text-center text-gray-300 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 flex flex-col items-center gap-2 mx-2 min-w-[120px]"
                            tabIndex={0}
                            style={{ cursor: "pointer" }}
                          >
                            <tech.icon
                              size={32}
                              color={tech.color}
                              aria-label={tech.name}
                            />
                            <span
                              className="mt-1 text-base font-medium"
                              style={{ color: tech.color }}
                            >
                              {tech.name}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
