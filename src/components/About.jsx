import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo
          temporibus, atque molestiae velit voluptates quas cum consequatur
          eveniet, nostrum dolorem cupiditate enim laudantium facilis dolore
          ipsa et magni eos!
        </p>

        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          facere sapiente, at atque sit expedita, illum debitis culpa optio
          architecto earum delectus magni asperiores eius vitae sed beatae in?
          Aspernatur quam explicabo dolorum error adipisci eligendi facere rem
          delectus. Esse maiores optio veniam similique nemo ratione, voluptatem
          at ipsa vel?
        </p>
      </div>
    </div>
  );
};

export default About;
