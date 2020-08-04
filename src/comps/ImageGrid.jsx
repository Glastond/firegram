import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {" "}
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            className="img-wrap"
            key={doc.id}
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImage(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}{" "}
    </div>
  );
};

export default ImageGrid;
