import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="py-8 w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-8">
          Welcome to my personal website! I'm Chandradeep Kumar, a passionate
          software developer hailing from Ghaziabad, Uttar Pradesh. I have
          cultivated a strong interest in coding alongside my academic journey.
          Proficient in C++ and Java programming, I specialize in building
          Android applications, including web projects using Javascript
          Frameworks.
        </p>

        <br />

        <p className="text-xl">
          During my internship as an Android Developer, I contributed to the
          development frontend with the help of Kotlin and Xml , and Backend
          using node.js , express.js and sequelize connected with MYSQL Database
          .Additionally, I had the opportunity to work as a Content Associate at
          Chegg India Private Limited. In this role, I conducted extensive
          research on various topics related to current industry technologies
          and college practices. As part of a 12-person team, I explored
          different areas in the technical domain and provided factual
          statistics for posts and blogs.
        </p>
      </div>
    </div>
  );
};

export default About;
