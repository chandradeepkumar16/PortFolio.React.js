import React from "react";
import pay2park from "../assets/portfolio/pay2park.png";
import installNode from "../assets/portfolio/installNode.jpg";
import Braintrainer from "../assets/portfolio/Braintrainer.png";
import pb from "../assets/portfolio/pb.png";
import timepadx from "../assets/portfolio/timepadx.jpg";
import tq from "../assets/portfolio/tq.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pay2park,
      name: "Pay2Park",
      href: "https://github.com/chandradeepkumar16/Pay2Park",
    },
    {
      id: 2,
      src: tq,
      name: "Tally quiz App",
      href: "https://github.com/chandradeepkumar16/TallyQuizApp",
    },
    {
      id: 3,
      src: timepadx,
      name: "TimePadX",
      href: "https://github.com/chandradeepkumar16/Timepadx",
    },
    {
      id: 4,
      src: Braintrainer,
      name: "Brain Trainer",
      href: "https://github.com/chandradeepkumar16/BrainTrainerApp/",
    },
    {
      id: 5,
      src: installNode,
      name: "Sequilize Api",
      href: "https://github.com/chandradeepkumar16/SequelizeAPI",
    },
    {
      id: 6,
      src: pb,
      name: "PharmaBlock",
      href: "https://github.com/ayusshhhii/PharmaBlock",
    },
  ];

  return (
    <div
      name="portfolio"
      className="py-20 bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, href }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {name}
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  <a href={href}>Code </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
