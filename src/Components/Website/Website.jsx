import React from "react";
import "./Website.css";
import { motion } from "framer-motion";

const Website = () => {
  return (
    <div className="container">
      <div className="texts">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <h1>
            Hi, I am <br />
            Schmidt Fernando
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <p className="tage">JAVA & Javascript Developer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <p className="desc">

            An enthusiastic developer with experience in Java and JavaScript.
            Since I discovered my fascination with the world of programming, 
            I have been involved in the development of exciting and challenging
            applications and websites.

          </p>
        </motion.div>
        </div>
        <div className="me"></div>  
      <div className="empty"></div>
      </div>
  );
};

export default Website;
