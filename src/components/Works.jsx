import axios from "axios";
import { useEffect } from "react";
const initialState = {};
const Works = () => {
  const getMyGitHubData = async () => {
    try {
      const res = await axios.get("https://api.github.com/users/tim-mune");
      console.log(res);
      const data = await res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMyGitHubData();
  }, []);
  return (
    <div>
      <h1 className="text-gray-200 text-center">Projects</h1>
    </div>
  );
};

export default Works;
