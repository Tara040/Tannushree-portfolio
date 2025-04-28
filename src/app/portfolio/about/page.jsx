"use client";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  BookOpen,
  Code2,
  Brain,
  Briefcase,
} from "lucide-react";
import { useEffect } from "react";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const skills = [
    {
      name: "Frontend Development",
      icon: Code2,
      description: "React.js, Next.js, Tailwind CSS",
    },
    {
      name: "Backend Development",
      icon: Brain,
      description: "Java, Spring Boot, MySQL",
    },
    {
      name: "Professional Experience",
      icon: Briefcase,
      description: "6 months internship",
    },
    {
      name: "Learning & Growth",
      icon: BookOpen,
      description: "Continuous learner",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/chandan-jadhav",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/JadhavC07",
      color:
        "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:chandanjadhav5260@gmail.com",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "Indeed",
      icon: Globe,
      href: "https://www.indeed.com",
      color: "bg-indigo-500 hover:bg-indigo-600",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-emerald-900/20 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-20" data-aos="fade-up">
          <div className="relative bg-white/80 dark:bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/30 to-blue-100/30 dark:from-emerald-900/30 dark:to-blue-900/30" />
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full animate-spin-slow opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full">
                  <Image
                    className="rounded-full p-1"
                    src="/Images/my-prop.svg"
                    width={192}
                    height={192}
                    alt="Tanushree Umredkar"
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Tanushree Umredkar
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  Full-Stack Developer
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-all duration-300 transform hover:scale-105 ${link.color}`}
                    >
                      <link.icon className="w-4 h-4" />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & About Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* About Me */}
          <div data-aos="fade-right">
            <div className="bg-white/80 dark:bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 h-full">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  As a passionate IT professional with over 6 months of
                  internship experience, I&apos;ve developed a strong foundation
                  in full-stack development and modern web technologies.
                </p>
                <p>
                  My journey in tech has been driven by a constant desire to
                  learn and grow, taking on challenging projects that push my
                  boundaries and expand my skill set.
                </p>
                <p>
                  I specialize in creating responsive, user-friendly web
                  applications using cutting-edge technologies and best
                  practices in software development.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div data-aos="fade-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 group hover:border-emerald-500/50 transition-colors"
                >
                  <skill.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-6xl mx-auto mt-12" data-aos="fade-up">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-500 dark:to-blue-500 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Let&apos;s Work Together!
            </h2>
            <p className="mb-6">
              Looking for a dedicated developer to join your team?
            </p>
            <a
              href="mailto:chandanjadhav5260@gmail.com"
              className="inline-block bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
