import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import Header from "./Header";

const Main = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <Header user={user} />
    </>
  );
};

export default Main;
