import { useCollectionOnce } from "react-firebase-hooks/firestore";
import { getFirestore, collection } from "firebase/firestore";
import { app } from "../firebase/firebase";

const Family = () => {
  const [family, loading, error] = useCollectionOnce(
    collection(getFirestore(app), "families")
  );

  return (
    <>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {family && <span>{JSON.stringify(family.docs.map(doc => ({
        Id: doc.id,
        ...doc.data()
      })), null, 2)}</span>}
    </>
  );
};

export default Family;
