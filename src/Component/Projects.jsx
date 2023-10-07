import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HelperProject from "./helper";
import img1 from "../Image/img1.png"
// import img2 from "../Image/img2.png"
// import img3 from "../Image/img3.png"
// import img4 from "../Image/img4.png"
// import img5 from "../Image/img5.png"
console.log(img1)
const Projects = () => {
  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
    // will have the same effect.
    <Box id="projects" textAlign={"center"} pt="130px" mt={"10"}>
      <Heading>Projects</Heading>
      <SimpleGrid
        justifyContent="center"
        textAlign={"center"}
        m={"auto"}
        columns={{ base: "1", md: "2", xl: "3" }}
        spacing={{ base: "10px", md: "40px" }}
        w={{ base: "95%", md: "81%" }}
        marginTop="70px"
        marginBottom={"50px"}
      >
        {data.map((el, ind) => {
          return <HelperProject key={Date.now() + ind} {...el} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

let data = [
  {
    image:`${img1}`,
    title: "Mytheresa Clone",
    desc: "ClickIt is a 24x7  digital shoping platform, which provides online clothing fashion options.",
    techStack: ["HTML", "CSS", "React","Chakra-ui","Redux"],
    github: "https://github.com/Sushree-01/dainty-snake-6499",
    deploy: "https://dainty-snake-6499.vercel.app/",
  },
  {
    image:`${img1}`,
    desc: "ClickIt is a 24x7  digital shoping platform, which provides online clothing fashion options.",
    title: "ClickIt",
    techStack: ["HTML", "CSS", "React","Chakra-ui","Redux"],
    github: "https://github.com/Sushree-01/dainty-snake-6499",
    deploy: "https://dainty-snake-6499.vercel.app/",
  },
  {
    image:`${img1}`,
    title: "ClickIt",
    desc: "ClickIt is a 24x7  digital shoping platform, which provides online clothing fashion options.",
    techStack: ["HTML", "CSS", "React","Chakra-ui","Redux"],
    github: "https://github.com/Sushree-01/dainty-snake-6499",
    deploy: "https://dainty-snake-6499.vercel.app/",
  },
  {
    image:`${img1}`,
    desc: "ClickIt is a 24x7  digital shoping platform, which provides online clothing fashion options.",
    title: "ClickIt",
    techStack: ["HTML", "CSS", "React","Chakra-ui","Redux"],
    github: "https://github.com/Sushree-01/dainty-snake-6499",
    deploy: "https://dainty-snake-6499.vercel.app/",
  },
  {
    image:`${img1}`,
    desc: "ClickIt is a 24x7  digital shoping platform, which provides online clothing fashion options.",
    title: "ClickIt",
    techStack: ["HTML", "CSS", "React","Chakra-ui","Redux"],
    github: "https://github.com/Sushree-01/dainty-snake-6499",
    deploy: "https://dainty-snake-6499.vercel.app/",
  },
  ];

export default Projects;
