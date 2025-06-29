import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ModernPortfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "GIFT Utilities",
      description:
        "Led the development of a government utility management system serving 10,000+ users. Implemented secure payment processing and real-time billing features, resulting in 40% improved customer satisfaction.",
      category: "Government Tech • Team Lead",
      tags: ["Flutter", "Firebase", "REST API", "Payment Gateway"],
      image: "/placeholder.svg?height=400&width=300",
      color: "from-orange-400 to-red-500",
      stats: { users: "10K+", rating: "4.8" },
      achievements: [
        "40% improved customer satisfaction",
        "Zero security incidents",
      ],
    },
    {
      title: "Enbioals Healthcare",
      description:
        "Developed an AI-powered healthcare platform that processes complex health data. Collaborated with data scientists to implement machine learning features, achieving 95% accuracy in health recommendations.",
      category: "Healthcare • Full Stack",
      tags: ["Flutter", "AI/ML", "Healthcare API", "Data Analytics"],
      image: "/placeholder.svg?height=400&width=300",
      color: "from-cyan-400 to-blue-500",
      stats: { users: "5K+", rating: "4.9" },
      achievements: ["95% ML accuracy", "HIPAA compliant"],
    },
    {
      title: "Virtual Ref Fitness",
      description:
        "Built a computer vision-powered fitness app using TensorFlow Lite. Optimized real-time pose detection algorithms, reducing processing time by 60% while maintaining 90% accuracy.",
      category: "Fitness Tech • Technical Lead",
      tags: [
        "Flutter",
        "Computer Vision",
        "TensorFlow Lite",
        "Real-time Processing",
      ],
      image: "/placeholder.svg?height=400&width=300",
      color: "from-green-400 to-cyan-500",
      stats: { users: "15K+", rating: "4.7" },
      achievements: ["60% faster processing", "90% pose accuracy"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
      id="work"
      className="py-32 bg-black relative overflow-hidden"
      aria-label="Portfolio section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
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
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Featured Work</span>
            </div>
            <h2
              className="text-4xl lg:text-6xl font-bold text-white mb-6"
              id="portfolio-title"
            >
              Featured
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Here are some key projects that demonstrate my technical skills,
              problem-solving abilities, and impact in previous roles.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                aria-labelledby={`project-title-${index}`}
                tabIndex={0}
              >
                {/* Project Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="mb-4">
                    <span className="text-sm text-gray-400 font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3
                    className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300"
                    id={`project-title-${index}`}
                  >
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-6 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {project.stats.users}
                      </div>
                      <div className="text-sm text-gray-400">Active Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {project.stats.rating}
                      </div>
                      <div className="text-sm text-gray-400">App Rating</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <ul
                    className="flex flex-wrap gap-2 mb-8"
                    aria-label="Project tags"
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <li
                        key={tagIndex}
                        className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/20 list-none"
                        tabIndex={0}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Achievements (if any) */}
                  {project.achievements && project.achievements.length > 0 && (
                    <ul className="mb-4" aria-label="Project achievements">
                      {project.achievements.map((ach, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-green-400 text-sm list-disc ml-5"
                        >
                          {ach}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 rounded-full px-6 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <Play className="w-4 h-4 mr-2" aria-hidden="true" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 rounded-full px-6 bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      aria-label={`View code of ${project.title}`}
                    >
                      <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                      View Code
                    </Button>
                  </div>
                </div>

                {/* Project Image */}
                <motion.div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                >
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 hover:border-white/30 transition-all duration-500">
                    {/* Phone Mockup */}
                    <div className="relative mx-auto w-64 h-96 bg-black rounded-[3rem] border-4 border-gray-700 shadow-2xl overflow-hidden">
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 border-2 border-gray-600 rounded-full"></div>

                      {/* Screen Content */}
                      <div className="mt-12 mb-16 mx-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-full flex items-center justify-center relative overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                        ></div>
                        <div className="text-center z-10">
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl mx-auto mb-4 flex items-center justify-center`}
                          >
                            <span className="text-white font-bold text-xl">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                          <div className="text-white font-semibold">
                            {project.title}
                          </div>
                          <div className="text-gray-400 text-sm mt-2">
                            {project.category}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r ${project.color} rounded-full opacity-60`}
                      animate={{
                        scale: hoveredProject === index ? [1, 1.2, 1] : 1,
                        rotate: hoveredProject === index ? [0, 180, 360] : 0,
                      }}
                      transition={{
                        duration: 2,
                        repeat:
                          hoveredProject === index
                            ? Number.POSITIVE_INFINITY
                            : 0,
                      }}
                    />
                    <motion.div
                      className={`absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r ${project.color} rounded-full opacity-40`}
                      animate={{
                        scale: hoveredProject === index ? [1, 1.3, 1] : 1,
                        rotate: hoveredProject === index ? [360, 180, 0] : 0,
                      }}
                      transition={{
                        duration: 3,
                        repeat:
                          hoveredProject === index
                            ? Number.POSITIVE_INFINITY
                            : 0,
                      }}
                    />
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Button
              className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold group focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="View all projects"
            >
              View All Projects
              <ArrowRight
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
