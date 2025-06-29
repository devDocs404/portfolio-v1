import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Codoid Innovations Pvt. Ltd.",
      position: "Full Stack Dev.",
      duration: "2023 - Present",
      location: "Tamil Nadu, India",
      type: "Full-time",
      achievements: [
        "Led development of 10+ web applications serving 10,000+ users",
        "Improved app performance by 30% through code optimization",
        "Mentored 1 junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 40%",
      ],
      technologies: ["React", "Node.js", "MongoDB", "REST APIs", "Git"],
      color: "from-blue-400 to-cyan-500",
    },
    {
      company: "Codoid Innovations Pvt. Ltd.",
      position: "Intern",
      duration: "2023 - 2023",
      location: "Tamil Nadu, India",
      type: "Internship",
      achievements: [
        "Developed and maintained 3 production web applications",
        "Collaborated with cross-functional teams of 8+ members",
        "Reduced app crash rate by 75% through comprehensive testing",
        "Integrated payment gateways and third-party services",
      ],
      technologies: ["React", "Node.js", "MongoDB", "REST APIs", "Git"],
      color: "from-purple-400 to-pink-500",
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">
                Professional Experience
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Career
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              My professional experience in mobile development, showcasing
              growth, achievements, and technical expertise.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-white/20 to-transparent"></div>
                )}

                <div className="flex gap-8">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 hover:border-white/30 transition-all duration-500">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.position}
                        </h3>
                        <h4 className="text-xl text-gray-300 mb-3">
                          {exp.company}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                            {exp.type}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-400" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div
                              className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`}
                            ></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-medium text-gray-400 mb-3">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
