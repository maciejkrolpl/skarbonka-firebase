import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { logout } from "../firebase/firebase";
import { Context } from "./Context";

const Logout = () => {
  const navigate = useNavigate();
  const [context, setContext] = useContext(Context);
  useEffect(() => {
    const asyncLogout = async () => {
      await logout();
      setContext((currentContext) => ({
        ...currentContext,
        user: null,
      }));
      navigate("/");
    };
    asyncLogout();
  }, []);

  return (
    <>
      <div style={{ borderColor: "red" }}>LOGAUT</div>
    </>
  );
};
export default Logout;
