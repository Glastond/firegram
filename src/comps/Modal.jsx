import React from "react";
import { motion } from "framer-motion";

export default function Modal({ selectedImage, setSelectedImage }) {
  const handleClick = (e) => {
    //   Closes the modal if the user clicks on the backdrop and not the Image.
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImage}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
}
