import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";

function HomePage() {
  // const { state } = useLocation();
  // const [username, setUsername] = useState(state?.username);
  // console.log("state", state);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default HomePage;
