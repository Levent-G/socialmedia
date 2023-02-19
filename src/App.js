import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Topbar from "./layouts/Topbar";
import BottomBar from "./layouts/BottomBar";
import UserPage from "./pages/UserPage";
import PostListPage from "./pages/PostListPage";
import OnePostPage from "./pages/OnePostPage";
import SettingsUser from "./pages/SettingsUser";
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/homepage" element={<HomePage />}></Route>
            <Route path="/getoneuser/:userId" element={<UserPage />} />
            <Route path="/postlist" element={<PostListPage />}></Route>
            <Route path="/getonepost/:postId" element={<OnePostPage />} />
            <Route path="/settings" element={<SettingsUser />} />
          </Routes>
          <BottomBar />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
