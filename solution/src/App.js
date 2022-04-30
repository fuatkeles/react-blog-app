import "./App.css";
import AppRouter from "./app-router/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
import BlogContextProvider from "./contexts/BlogContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
          <ToastContainer/>
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
