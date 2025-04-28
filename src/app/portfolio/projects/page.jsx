"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Github,
  MonitorSmartphone,
  Star,
  Code2,
  Timer,
  Users,
  Gauge,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Kohinoor Tex E-Commerce",
    category: "Mobile Development",
    subtitle: "Mobile Commerce Platform",
    description:
      "A comprehensive e-commerce solution for Kohinoor Publications, revolutionizing their digital presence with seamless WooCommerce integration and robust inventory management.",
    longDescription:
      "Developed an end-to-end mobile commerce platform that transformed Kohinoor Publications' digital presence. Implemented complete WooCommerce integration with secure authentication, real-time inventory tracking, and streamlined order processing. Built an intuitive admin dashboard for inventory and billing management.",
    tech: ["Flutter", "WooCommerce API", "REST API", "State Management"],
    image: "/Images/kohinoor.webp",
    metrics: [
      { label: "User Growth", value: "200%", icon: Users },
      { label: "Order Processing", value: "2.5x", icon: Gauge },
      { label: "App Rating", value: "4.8", icon: Star },
    ],
    highlights: [
      "Seamless WooCommerce Integration",
      "Real-time Inventory Tracking",
      "Secure Payment Processing",
    ],
  },
  {
    id: 2,
    title: "Digital Marketing Platform",
    category: "Web Development",
    subtitle: "Next.js Web Application",
    description:
      "A high-performance marketing platform built with Next.js, featuring dynamic content management and optimized SEO practices.",
    longDescription:
      "Created a modern digital marketing platform that sets new standards in web performance and user engagement. Implemented advanced SEO strategies, dynamic content loading, and interactive animations. The platform serves as a scalable solution for content management and lead generation.",
    tech: ["Next.js", "Tailwind CSS", "React Query", "Framer Motion"],
    image: "/Images/marketing.webp",
    metrics: [
      { label: "Page Speed", value: "98/100", icon: Timer },
      { label: "Conversion", value: "+75%", icon: Gauge },
      { label: "SEO Score", value: "95/100", icon: Star },
    ],
    highlights: [
      "Advanced SEO Optimization",
      "Dynamic Content Loading",
      "Interactive Animations",
    ],
  },
  {
    id: 3,
    title: "Vibetara E-Commerce",
    category: "Mobile Development",
    subtitle: "Mobile Shopping Experience",
    description:
      "Feature-rich mobile app for t-shirt retail, incorporating secure payments and real-time inventory management.",
    longDescription:
      "Engineered a complete mobile shopping experience for Vibetara's t-shirt line. Integrated secure payment processing, real-time inventory updates, and personalized user experiences. Implemented efficient state management and caching solutions for optimal performance.",
    tech: ["Flutter", "REST API", "Firebase", "Payment Gateway"],
    image: "/Images/vibetara.webp",
    metrics: [
      { label: "Sales Growth", value: "150%", icon: Gauge },
      { label: "Retention", value: "85%", icon: Users },
      { label: "Load Time", value: "0.8s", icon: Timer },
    ],
    highlights: [
      "Secure Payment Integration",
      "Real-time Updates",
      "Personalized Experience",
    ],
  },
  {
    id: 4,
    title: "SAE Documentation System",
    category: "Enterprise Solution",
    subtitle: "Document Automation Platform",
    description:
      "Innovative system for generating and managing movement-related documentation with automated workflows.",
    longDescription:
      "Currently leading the development of a comprehensive documentation system that streamlines the creation and management of movement-related documents. Implementing cutting-edge features including automated document generation, digital signatures, and secure cloud storage integration.",
    tech: ["Flutter", "Cloud Services", "PDF Generation", "Digital Signatures"],
    image: "/Images/sae.webp",
    metrics: [
      { label: "Efficiency", value: "+70%", icon: Gauge },
      { label: "Accuracy", value: "99.9%", icon: Star },
      { label: "Time Saved", value: "85%", icon: Timer },
    ],
    highlights: [
      "Automated Document Generation",
      "Digital Signature Integration",
      "Secure Cloud Storage",
    ],
  },
];

const ProjectCard = ({ project, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`
      group relative overflow-hidden rounded-xl p-6 cursor-pointer
      transition-all duration-500 ease-out
      ${
        isSelected
          ? "dark:bg-gradient-to-br dark:from-emerald-900/40 dark:to-blue-900/40 dark:border-emerald-500/30 bg-gradient-to-br from-emerald-100 to-blue-100 border-emerald-500/30"
          : "hover:bg-gray-100 dark:hover:bg-white/5 border-transparent"
      }
      border backdrop-blur-sm
      bg-white/80 dark:bg-transparent
    `}
  >
    <div className="flex items-start justify-between">
      <div>
        <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-2">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {project.subtitle}
        </p>
      </div>
      <ArrowRight
        className={`w-6 h-6 transform transition-all duration-300
          ${
            isSelected
              ? "rotate-90 text-emerald-600 dark:text-emerald-400"
              : "text-gray-400 dark:text-gray-600 group-hover:translate-x-1"
          }
        `}
      />
    </div>

    <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
      {project.description}
    </div>

    <div className="flex flex-wrap gap-2 mt-4">
      {project.tech.slice(0, 2).map((tech, index) => (
        <span
          key={index}
          className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded"
        >
          {tech}
        </span>
      ))}
      {project.tech.length > 2 && (
        <span className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded">
          +{project.tech.length - 2}
        </span>
      )}
    </div>
  </div>
);

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] dark:from-gray-900 dark:via-gray-900 dark:to-emerald-900/20 text-gray-900 dark:text-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-500 text-transparent bg-clip-text">
              Featured Projects
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Exploring the intersection of design and technology through
            innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Project List */}
          <div className="lg:col-span-5 space-y-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isSelected={selectedProject.id === project.id}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* Project Details */}
          <div className="lg:col-span-7">
            <div className="bg-white/80 dark:bg-gray-800/30 rounded-2xl border border-gray-200 dark:border-gray-700/50 overflow-hidden backdrop-blur-sm">
              {/* Project Image */}
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-gray-100/50 to-transparent dark:from-gray-900 dark:via-gray-900/50 dark:to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 dark:border-gray-700">
                <div className="flex space-x-8 px-8">
                  {["overview", "details", "tech"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`
                        py-4 px-2 font-medium transition-colors relative
                        ${
                          activeTab === tab
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        }
                      `}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      {activeTab === tab && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 dark:bg-emerald-400" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>

                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.metrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                          <div
                            key={index}
                            className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700/50 hover:border-emerald-500/30 transition-colors group"
                          >
                            <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
                            <div className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                              {metric.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {metric.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeTab === "details" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Key Highlights
                      </h3>
                      <ul className="space-y-3">
                        {selectedProject.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-center text-gray-700 dark:text-gray-300"
                          >
                            <span className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full mr-3" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "tech" && (
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">
                  <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center gap-2 transition-colors group">
                    <MonitorSmartphone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    View Live
                  </button>
                  <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg flex items-center gap-2 transition-colors group">
                    <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
