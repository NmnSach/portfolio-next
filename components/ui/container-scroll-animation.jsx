import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({ users, titleComponent }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[50rem] md:h-[50rem] flex flex-col items-center justify-center relative p-2 md:p-20 pt-0"
      ref={containerRef}
    >
      <div className="flex justify-center items-center text-center">
        <h1 className="text-6xl bg-gradient-to-r text-transparent bg-clip-text from-gray-200 to-gray-700">A developer for <br /> all things web.</h1>
      </div>
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          users={users}
        />
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ rotate, scale, translate, users }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-3xl mx-auto h-[20rem] md:h-[30rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="bg-gray-100 h-full w-full rounded-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden p-4">
        {users &&
          users.map((user, idx) => (
            <motion.div
              key={`user-${idx}`}
              className="bg-white rounded-md cursor-pointer relative"
              style={{ translateY: translate }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
            >
              <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
                {user.badge}
              </div>
              <img
                src={user.image}
                className="rounded-tr-md rounded-tl-md text-sm "
                alt="thumbnail"
              />
              <div className="p-4">
                <h1 className="font-semibold text-sm ">{user.name}</h1>
                <h2 className=" text-gray-500 text-xs ">{user.designation}</h2>
              </div>
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
};
