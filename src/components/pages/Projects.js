// import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "./data";
import ProjectPage from "./ProjectPage";

const Projects = () => {
  // const projectList = projects.map(projects => <ProjectPage {...projects} key={projects.id} />)
  return (
      <div>
        <h2 className="mainHeading">Please see my past work</h2>
      {projects.map((project) => (
        <ProjectPage
          key={project.title}
          title={project.title}
          description={project.description}
          imageUrl={project.image}
          repoLink={project.repoLink}
        />
      ))}
      </div>
  );
};

export default Projects;


//  export default function Projects() {
//   return (
//     <section id="projects" className="text-gray-400 bg-gray-900 body-font">
//       <div className="container px-5 py-10 mx-auto text-center lg:px-40">
//         <div className="flex flex-col w-full mb-20">
//           {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
//           <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
//             Apps I've Built
//           </h1>
//           <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//           On this page, you will find a variety of projects that I have been working on as part of my learning journey.
//           </p>
//         </div>
//         <div className="flex flex-wrap -m-4">
//           {projects.map((project) => (
//             <a
//               href={project.repoLink}
//               key={project.image}
//               className="sm:w-1/2 w-100 p-4">
//               <div className="flex relative">
//                 <img
//                   alt="gallery"
//                   className="absolute inset-0 w-full h-full object-cover object-center"
//                   src={project.image}
//                 />
//                 <div className="px-6 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                   <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
//                     {project.subtitle}
//                   </h2>
//                   <h1 className="title-font text-lg font-medium text-white mb-3">
//                     {project.title}
//                   </h1>
//                   <p className="leading-relaxed">{project.description}</p>
//                   {/* <a
//               href={project.repoLink}
//               className="sm:w-1/2 w-100 p-4">
//               </a> */}
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


