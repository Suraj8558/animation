import React, { Suspense, useState } from "react";
import { myProjects } from "../constents";
import CanvasLoader from "./CanvasLoader";
import DemoComputer from "./DemoComputer";
import { Canvas,} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const projectCount = myProjects?.length

const Project = () => {
const [selectedIndex, setSelectedIndex] = useState(0)
const currentProject = myProjects[selectedIndex];
    const handleNavigation = (direction) => {
        setSelectedIndex((prevIndex) => {
          if (direction === "previous") {
            return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
          } else {
            return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
          }
        });
    }
  return (
    <section className="c-space my-20">
      <p className="head-text"> My work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {" "}
              {currentProject?.title}
            </p>
            <p className="text-white animatedText"> {currentProject?.desc}</p>
            <p className="text-white animatedText">
              {" "}
              {currentProject?.subdesc}
            </p>
          </div>
          <div className="flex items-center gap-5">
            {currentProject.tags.map((tag, index) => (
              <div key={index} className="tech-logo">
                <img src={tag.path} alt={tag.name} className="" />
              </div>
            ))}
            <a
              href={currentProject.href}
              className="flex text-center gap-2 cursor-pointer text-white-600"
              target="_blank"
              rel="noreferrer"
            >
              <p>check live site </p>
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="w-3 h-3"
              />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("preview")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <directionalLight position={[10, 10, 5]} />
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture}/>
                </group>
                <OrbitControls 
                    maxPolarAngle={Math.PI / 2 }
                    enableZoom={false}
                />
              </Suspense>
            
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Project;
