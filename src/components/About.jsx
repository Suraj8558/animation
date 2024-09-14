import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "./Button";
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("surajsk8558@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-col-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext"> Hi, i am suraj</p>
              <p className="grid-subtext">
                {" "}
                with 3 years of experience, i have honed my skills in frontend
                development
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext"> Hi, i am suraj</p>
              <p className="grid-subtext">
                {" "}
                with 3 years of experience, i have honed my skills in frontend
                development
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // labelsData={{
                //     lat: 40, log: -100,
                //     text: "I' am here !",
                //     color: 'white',
                //     size: 20,
                // }}
              />
            </div>
            <div>
              <p className="grid-headtext">
                {" "}
                I work remotely across most timezones.
              </p>
              <p className="grid-subtext">
                {" "}
                i'am based in Ludhina, with remote work available.
              </p>
              <Button
                name={"contact me"}
                isBeam
                containerClass={"w-full mt-10"}
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext"> My passion for coding</p>
              <p className="grid-subtext">
                {" "}
                I love solving problems and building things through code. Coding
                isn't just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-3"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me </p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy text"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  surajsk8558@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
