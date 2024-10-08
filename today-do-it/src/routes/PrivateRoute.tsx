import { Navigate, Outlet } from "react-router-dom";
import { currentUser } from "@/api/pocketbase";
import { useEffect, useState } from "react";
import { AuthModel } from "pocketbase";
import { Spinner } from "@/components/Spinner";

export type UserContext = {
  user: AuthModel;
};

const PrivateRoute = () => {
  const [user, setUser] = useState<AuthModel>(null);
  const [currentUserPromise] = useState<Promise<AuthModel>>(currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    currentUserPromise
      .then((user) => {
        setUser(user);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Spinner />
  ) : user ? (
    <Outlet context={{ user }} />
  ) : (
    <Navigate to="/join" />
  );
};
export default PrivateRoute;
