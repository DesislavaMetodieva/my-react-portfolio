import React from "react";


function Home() {
  return (
      <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Desi.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          As a developer, I have a passion for creating innovative and user-friendly applications that solve real-world problems. With a understanding of modern web technologies and a commitment to quality, I strive to deliver elegant and efficient solutions that exceed expectations. This website serves as my React developer portfolio, showcasing my work and abilities, and providing a glimpse into my approach to development. I look forward to connecting with others in the industry and leveraging my skills to make a meaningful impact in the digital world.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="/projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./portrait.jpg"
          />
        </div>
      </div>
    </section>
   
  );
}

export default Home;

