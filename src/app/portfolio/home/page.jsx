"use client";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="flex justify-center py-12 bg-white dark:bg-gray-950">
        <div className="text-center p-20">
          <h1 className="text-4xl font-extrabold leading-5 mb-4 roboto-regula text-lime-500 ml11">
            <div className="text-5xl font-bold">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  "I'm a Web Developer",
                  1000,
                  "I'm a Front-End Developer",
                  1000,
                  "I'm a Back-End Developer",
                  1000,
                  "I'm a Full Stack Developer",
                  500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>
          <h1 className="text-4xl font-bold mb-4 roboto-regula text-lime-500">
            <TypeAnimation
              sequence={["ALL", 500, "IN", 500, "ONE", 500]}
              repeat={Infinity}
            />
          </h1>
          <h2 className="text-2xl mb-4 home-font text-lime-500 opacity-95 roboto-regular">
            &quot;Designing the future, one line of code at a time. Your
            full-stack maestro of innovation and elegance.&quot;
          </h2>

          <div className="w-48 h-58 mx-auto rounded-full overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              width={201}
              height={210}
              src="/Images/my-prop.svg"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <div className="dark:bg-gray-950 bg-white">
        <div className="container mx-auto text-center">
          <div className="inline-block relative" style={{ maxWidth: "860px" }}>
            <img src="/Images/my-pc.svg" alt="SVG Image" />
          </div>
        </div>
      </div>
      <section
        className="text-black text-center py-16"
        style={{ backgroundColor: "rgb(58, 255, 9)" }}
      >
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-3/5">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Hi, I’m Chandan. Nice to meet you.
              </h1>
              <h2 className="text-xl md:text-xl font-medium">
                With 6 months of internship experience and now serving as a
                junior software developer...
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
