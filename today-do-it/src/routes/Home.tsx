import { useOutletContext } from "react-router-dom";
import { UserContext } from "@/routes/PrivateRoute";

function Home() {
  const { user } = useOutletContext<UserContext>();

  return <div>현재 사용자: {user?.username}</div>;
}

export default Home;
