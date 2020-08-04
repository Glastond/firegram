import { projectFirestore } from "../firebase/config";
import { useState, useEffect } from "react";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // Listening to changes in the Images collection.
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        // snap stores the current snapshot of the database.
        snap.forEach((doc) => {
          // .data() returns the data stored for the document and the id gives the id.
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
