import { initiateSignUp } from "@/api/pocketbase";
import { useNavigate } from "react-router-dom";
function Join() {
  const navigate = useNavigate();
  async function join() {
    await initiateSignUp();
    navigate("/");
  }
  return (
    <>
      <div className="flex-column items-center h-full justify-center">
        <h1>Today Do It</h1>
        <div className="justify-evenly w-1/5 mt-[10px]">
          <button onClick={join}>Github로 로그인하기</button>
        </div>
      </div>
    </>
  );
}
export default Join;
