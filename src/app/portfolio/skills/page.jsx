"use client";
import { useEffect } from "react";
import Aos from "aos";
import { TypeAnimation } from "react-type-animation";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const skillSections = [
    {
      title: "Programming Languages",
      items: [
        { name: "JAVA", icon: "/Images/logo/Java2.svg", level: "Advanced" },
        {
          name: "JavaScript",
          icon: "/Images/logo/Javascript.svg",
          level: "Advanced",
        },
        {
          name: "Python",
          icon: "/Images/logo/python2.svg",
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Libraries",
      items: [
        {
          name: "ReactJs",
          icon: "/Images/logo/react 1.svg",
          level: "Advanced",
        },
        {
          name: "JQuery",
          icon: "/Images/logo/jquary.svg",
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Frameworks",
      items: [
        {
          name: "ExpressJs",
          icon: "/Images/logo/express.svg",
          level: "Advanced",
        },
        {
          name: "Bootstrap",
          icon: "/Images/logo/bootstrap.svg",
          level: "Advanced",
        },
        {
          name: "Tailwind CSS",
          icon: "/Images/logo/tailwind.svg",
          level: "Advanced",
        },
        {
          name: "Bulma",
          icon: "/Images/logo/bulma.svg",
          level: "Intermediate",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl font-bold text-lime-500 mb-4"
            data-aos="fade-down"
          >
            <TypeAnimation
              sequence={[
                "My Skills",
                1000,
                "My Expertise",
                1000,
                "My Tech Stack",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            &quot;Crafting digital experiences with a diverse toolset. Each
            technology mastered is another solution waiting to happen.&quot;
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8">
          {skillSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300"
              data-aos={sectionIndex % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <h2 className="text-2xl font-bold text-lime-500 mb-8 text-center">
                {section.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {section.items.map((item, index) => (
                  <div
                    key={item.name}
                    className="group relative"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 group-hover:bg-lime-50 dark:group-hover:bg-gray-600 transition-all duration-300">
                      <div className="w-16 h-16 mb-4 relative">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {item.name}
                      </h3>
                      <span className="text-sm text-lime-600 dark:text-lime-400">
                        {item.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Tools & Database Section */}
          <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up">
            {/* Tools */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-lime-500 mb-8 text-center">
                Development Tools
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <img
                    src="/Images/logo/vscode.svg"
                    alt="VS Code"
                    className="w-16 h-16 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    VS Code
                  </h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <img
                    src="/Images/logo/github.svg"
                    alt="GitHub"
                    className="w-16 h-16 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    GitHub
                  </h3>
                </div>
              </div>
            </div>

            {/* Database */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-lime-500 mb-8 text-center">
                Database
              </h2>
              <div className="flex justify-center">
                <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <img
                    src="/Images/logo/mysql.svg"
                    alt="MySQL"
                    className="w-16 h-16 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    MySQL
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
