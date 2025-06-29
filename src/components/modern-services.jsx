import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Palette, Code, Rocket, ArrowRight } from "lucide-react";

export default function ModernServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Mobile Development",
      description:
        "Expert in Flutter framework with deep understanding of Dart programming language and mobile app architecture.",
      features: [
        "Flutter & Dart",
        "State Management (Bloc, Provider)",
        "Custom UI Components",
      ],
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description:
        "Strong skills in translating designs into pixel-perfect, responsive mobile interfaces with smooth animations.",
      features: ["Material Design", "Custom Animations", "Responsive Layouts"],
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Target,
      title: "Backend Integration",
      description:
        "Experienced in integrating mobile apps with various backend services and third-party APIs.",
      features: ["REST APIs", "Firebase Integration", "Database Management"],
      color: "from-green-400 to-cyan-500",
    },
    {
      icon: Rocket,
      title: "DevOps & Deployment",
      description:
        "Proficient in app deployment, CI/CD pipelines, and maintaining high-quality code standards.",
      features: [
        "App Store Deployment",
        "CI/CD Pipelines",
        "Code Quality & Testing",
      ],
      color: "from-orange-400 to-red-500",
    },
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
      id="services"
      className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
      aria-label="Services section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Core Expertise</span>
            </div>
            <h2
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
              id="services-title"
            >
              Technical
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Skills
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              My technical expertise spans across mobile development, with a
              strong focus on Flutter and modern development practices.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.article
                key={index}
                className="group relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                aria-labelledby={`service-title-${index}`}
                tabIndex={0}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 hover:border-white/30 transition-all duration-500 h-full focus:outline-none focus:ring-2 focus:ring-cyan-400">
                  {/* Service Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon
                        className="w-8 h-8 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Service Content */}
                  <h3
                    className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300"
                    id={`service-title-${index}`}
                  >
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul
                    className="space-y-3 mb-6"
                    aria-label={`${service.title} features`}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <motion.button
                    className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
                    whileHover={{ x: 5 }}
                    aria-label={`Learn more about ${service.title}`}
                    type="button"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
