import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ModernFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                id="footer-connect-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Let's Connect
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {" "}
                  Professionally
                </span>
              </motion.h2>

              <motion.p
                className="text-xl text-gray-400 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm actively seeking new opportunities to contribute to
                innovative teams. Let's discuss how my skills and experience can
                add value to your organization.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold"
                  aria-label="Contact Me via Email"
                  asChild
                >
                  <a href="mailto:sk.muzakkirhussain@gmail.com">
                    <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                    Contact Me
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg bg-transparent"
                >
                  View Resume
                </Button>
              </motion.div>
            </div>

            {/* Right Content - Contact Info */}
            <motion.div
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Professional Contact
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <a
                    href="mailto:sk.muzakkirhussain@gmail.com"
                    className="underline focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    aria-label="Email Shaik Muzakkir Hussain"
                  >
                    sk.muzakkirhussain@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <span>Andhra Pradesh, India</span>
                </div>
              </div>

              <div className="flex gap-4">
                {[
                  {
                    icon: Github,
                    href: "#",
                    color: "hover:bg-gray-700",
                    label: "GitHub profile",
                  },
                  {
                    icon: Linkedin,
                    href: "#",
                    color: "hover:bg-blue-600",
                    label: "LinkedIn profile",
                  },
                  {
                    icon: Mail,
                    href: "#",
                    color: "hover:bg-green-600",
                    label: "Email Shaik Muzakkir Hussain",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <motion.div
            className="flex items-center gap-2 text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by Shaik Muzakkir © 2025</span>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-cyan-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white" aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
