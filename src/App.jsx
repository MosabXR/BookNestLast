import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Explore from "./pages/Explore";
import Search from "./pages/Search";
import Author from "./pages/Author";
import Profile from "./pages/Profile";
import Categories from "./pages/Categories";
import Feed from "./pages/Feed";
import Settings from "./pages/Settings";
import Book from "./pages/Book";
import Landing from "./pages/Landing";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} /> {/* Default route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/search" element={<Search />} />
          <Route path="/author" element={<Author />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/book" element={<Book />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Catch-all route for 404 */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
