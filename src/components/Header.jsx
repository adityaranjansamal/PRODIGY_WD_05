import React from "react";
import "/src/styles/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      class="header"
      initial={{ letterSpacing: "2px" }}
      animate={{ letterSpacing: "10px" }}
      transition={{ delay: 0.1, type: "spring", stiffness: 120, damping: 12 }}
      whileHover={{
        color: "#f8e112",
        delay: 0,
        letterSpacing: "3px",
        scale: 1.25,
      }}
    >
      <FontAwesomeIcon icon={faSun} />
      Celestia Weather
    </motion.div>
  );
};

export default Header;
