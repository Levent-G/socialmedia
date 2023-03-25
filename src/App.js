import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Topbar from "./layouts/Topbar";
import BottomBar from "./layouts/BottomBar";
import UserPage from "./pages/UserPage";
import PostListPage from "./pages/PostListPage";
import OnePostPage from "./pages/OnePostPage";
import SettingsUser from "./pages/SettingsUser";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <>
        <ToastContainer />
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/homepage" element={<HomePage />}></Route>
            <Route path="/getoneuser/:userId" element={<UserPage />} />
            <Route path="/postlist" element={<PostListPage />}></Route>
            <Route path="/getonepost/:postId" element={<OnePostPage />} />
            <Route path="/settings" element={<SettingsUser />} />
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/chat" element={<ChatPage />}></Route>
          </Routes>
          <BottomBar />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
