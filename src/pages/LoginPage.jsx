import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ authUser }) => {
  const navigate = useNavigate();
  const auth = () => {
    authUser(true);
    navigate("/");
  };
  return <Button onClick={auth} text={"Войти"}></Button>;
};

export default LoginPage;
