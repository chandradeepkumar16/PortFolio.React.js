import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import android from "../assets/android.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";
import kotlin from "../assets/kotlin.png";
import clang from "../assets/clang.png";
import mysql from "../assets/mysql.png";
import firebase from "../assets/firebase.png";
import figma from "../assets/figma.png";



const Experience = () => {
  const techs = [
    {
      id: 1,
      src: kotlin,
      title: "Kotlin",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: java,
      title: "Java",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: android,
      title: "Android development",
      style: "shadow-green-500",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-800",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: reactImage,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-600",
    },
    {
      id: 9,
      src: nodejs,
      title: "Node.js",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-500",
    },
    {
      id: 11,
      src: clang,
      title: "C++",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: mysql,
      title: "MY SQL",
      style: "shadow-blue-700",
    },
    {
      id: 13,
      src: firebase,
      title: "Google Firebase",
      style: "shadow-yellow-400",
    },
    {
      id: 14,
      src: figma,
      title: "Figma",
      style: "shadow-orange-400",
    },
  ];

  return (
    <div
      name="Tech Stack"
      className="py-16 bg-gradient-to-b from-gray-800 to-black "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tech Stacks
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
