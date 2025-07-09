import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Chatbox from "../Components/ChatBox";
import MyChats from "../Components/MyChats";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { useHistory } from "react-router-dom";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user, setUser } = ChatState(); // ✅ add setUser
  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      history.push("/"); // Redirect to login
    } else {
      setUser(userInfo); // ✅ restore user in context
    }
  }, [history, setUser]);

  return (
    <div className="Chatt" style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
        mt="60px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
