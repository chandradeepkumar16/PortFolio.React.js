import React from "react";

const About = () => {
  return (
    <div
      name="experience"
      className="py-8 w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Work Experience
          </p>
        </div>
        <p className="text-4xl mt-8 font-bold inline border-b-4 border-gray-500"> Helfinch India  </p>
        <p className="text-2xl mt-4 font-semibold"> Android Developer  ( Feb 2023 - Present)</p>
        <p className="text-xl mt-2">
        ◦ Collaborated effectively in a team environment to develop high-quality applications, following the MVVM clean
        architecture pattern </p>
       <p className="text-xl mt-2"> ◦ Successfully built a robust backend server using Node.js, Express.js, and Sequelize. Implemented RESTful APIs
        to communicate with MySQL databases </p>
        <p className="text-xl mt-2"> ◦ Possess extensive knowledge and hands-on experience in utilizing Google Firebase, including its Realtime Database </p>
        

        <br />

        <p className="text-4xl mt-8 font-bold inline border-b-4 border-gray-500">
          Chegg India Private Limited
        </p>
        <p className="text-2xl mt-4 font-semibold"> Content Associate ( MAY 2021 - NOV 2021) </p>
        <p className="text-xl mt-2"> ◦ Conducted extensive research on the internet on the various topics regarding technologies used in industries and
            colleges currently.<br/>
            ◦ Researched different areas in the technical domain and contributed to a team of 12 people. <br/>
            ◦ Coordinated with teams providing factual statistics in posts and blogs.</p>

            <br/>

            <p className="text-4xl mt-8 font-bold inline border-b-4 border-gray-500">
          The Sparks Foundation
        </p>
        <p className="text-2xl mt-4 font-semibold"> Android Developer Intern ( JAN 2021 - FEB 2021) </p>
        <p className="text-xl mt-2">◦ Made an app that allows users to login into the app and provides the information of their account associated with it.<br/>
          ◦ Integrated Facebook as well as Google login/sign-up feature from the scratch <br/>
          ◦ Implemented Google Firebase for authentication and increased in customer experience.</p>



      </div>
    </div>
  );
};

export default About;
