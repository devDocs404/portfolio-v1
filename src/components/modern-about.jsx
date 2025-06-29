import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Smartphone, Zap, Users } from "lucide-react";

export default function ModernAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "2.5+", label: "Years Experience", icon: Zap },
    { number: "10+", label: "Projects Completed", icon: Code },
    { number: "5+", label: "Happy Clients", icon: Users },
    { number: "20+", label: "Projects Deployed", icon: Smartphone },
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
              A passionate Frontend Engineer focused on building intuitive,
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
                  With 3+ years of experience in mobile development, I
                  specialize in Flutter and have successfully delivered 15+
                  applications across various industries including healthcare,
                  government, and fitness technology.
                </p>
                <p>
                  I'm passionate about writing clean, maintainable code and
                  following best practices. My experience includes working with
                  cross-functional teams, participating in code reviews, and
                  mentoring junior developers.
                </p>
                <p>
                  I stay current with the latest Flutter updates and mobile
                  development trends, and I'm always looking for opportunities
                  to grow and contribute to meaningful projects that make a
                  positive impact.
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
                  className="text-xl font-semibold text-white mb-6"
                  id="tech-stack-title"
                >
                  Tech Stack
                </h4>
                <ul
                  className="grid grid-cols-2 gap-4"
                  aria-labelledby="tech-stack-title"
                >
                  {[
                    "Flutter",
                    "Dart",
                    "Firebase",
                    "REST APIs",
                    "Git",
                    "Figma",
                    "Android",
                    "iOS",
                  ].map((tech, index) => (
                    <motion.li
                      key={index}
                      className="bg-white/5 rounded-lg p-3 text-center text-gray-300 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      whileHover={{ scale: 1.05 }}
                      tabIndex={0}
                    >
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
