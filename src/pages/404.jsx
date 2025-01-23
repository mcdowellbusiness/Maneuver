import React from "react";
import { motion } from "framer-motion";

import { textVariant } from "../utils/motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center">
      <motion.div variants={textVariant()} className="mx-auto">
        <h1>404 - Page Not Found :(</h1>
      </motion.div>
    </div>
  );
};

export default NotFound;
