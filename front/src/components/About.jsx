import React from "react";
import aboutImg from "../assets/about-image.png"

const About = () => {
  return (
    <div className="bg-white w-full" id="about">
      <div className="p-24 flex flex-col gap-10 lg:flex-row lg:gap-0 lg:justify-center">
        <div className="lg:w-[50%] flex flex-col justify-center align-center">
          <h2 className="text-2xl font-medium mb-5">About us</h2>
          <p className="text-md md:text-lg lg:w-[80%] ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugit,
            sint debitis laudantium nemo aut eligendi deleniti maiores
            consectetur molestiae, iure doloribus repellat, minus voluptatem
            facilis doloremque vel id rem. Est a nisi placeat quo nostrum
            accusantium blanditiis dolores et velit earum nihil in corrupti
            dolorum distinctio ratione sapiente, totam ipsam illo aliquid minus
            saepe cum deserunt! Maiores, cumque incidunt! Necessitatibus sed
            mollitia, debitis nisi culpa delectus dolorem, molestias nulla
          </p>
        </div>
        <div className="flex items-center justify-center">
            <img src={aboutImg} className="w-[420px] h-[420px] object-cover" alt=" about img" />
        </div>
      </div>
    </div>
  );
};

export default About;





// import React from "react";
// import aboutImg from "../assets/about-image.png"

// const About = () => {
//   return (
//     <div className="bg-white">
//       <div className="p-24 grid grid-cols-2">
//         <div className="">
//           <h2 className="text-2xl font-medium">About us</h2>
//           <p className="text-lg">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugit,
//             sint debitis laudantium nemo aut eligendi deleniti maiores
//             consectetur molestiae, iure doloribus repellat, minus voluptatem
//             facilis doloremque vel id rem. Est a nisi placeat quo nostrum
//             accusantium blanditiis dolores et velit earum nihil in corrupti
//             dolorum distinctio ratione sapiente, totam ipsam illo aliquid minus
//             saepe cum deserunt! Maiores, cumque incidunt! Necessitatibus sed
//             mollitia, debitis nisi culpa delectus dolorem, molestias nulla
//           </p>
//         </div>
//         <div className="flex items-center justify-center">
//             <img src={aboutImg} className=".w-[400px].h-[400px].object-cover" alt=" about img" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
