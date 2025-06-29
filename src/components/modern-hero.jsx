import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profileWebp from "../assets/Shaik.webp";
import profilePng from "../assets/Shaik.png";

export default function ModernHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
      aria-label="Hero section"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-16 min-h-[80vh]"
        >
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">
                  Open to new opportunities
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              id="hero-title"
            >
              <span className="text-white">I'm </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Shaik Muzakkir
              </span>
              <br />
              <span className="text-white">Web Developer</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
            >
              Experienced Full Stack Developer with 2.5+ years of building
              scalable, end-to-end web applications. I'm driven to contribute to
              forward-thinking teams and deliver meaningful digital solutions
              that make a real impact.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold group focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="View my projects section"
              >
                View My Projects
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Download my resume"
                asChild
              >
                <a href="#" download>
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a
                  href="mailto:sk.muzakkirhussain@gmail.com"
                  className="underline focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Email Shaik Muzakkir Hussain"
                >
                  sk.muzakkirhussain@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span aria-label="Location: Andhra Pradesh, India">
                  Andhra Pradesh, India
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Profile */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 relative"
          >
            <div className="relative">
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl opacity-20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-cyan-500 rounded-full opacity-30"
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              {/* Main Profile Card */}
              <div className="relative w-86 h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                        {/* <span className="text-3xl font-bold text-white">
                          SMH
                        </span> */}
                        <picture>
                          <source srcSet={profileWebp} type="image/webp" />
                          <source srcSet={profilePng} type="image/png" />
                          <img
                            src={profileWebp}
                            alt="Shaik Muzakkir Hussain profile photo"
                            className="w-full h-full rounded-full"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-400 rounded-full border-4 border-black animate-pulse"></div>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2">
                    Shaik Muzakkir Hussain
                  </h2>
                  <p className="text-cyan-400 mb-6">Full Stack Dev.</p>

                  <div className="flex justify-center gap-4">
                    {[
                      { icon: Github, href: "#", label: "GitHub profile" },
                      { icon: Linkedin, href: "#", label: "LinkedIn profile" },
                      {
                        icon: Mail,
                        href: "#",
                        label: "Email Shaik Muzakkir Hussain",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
