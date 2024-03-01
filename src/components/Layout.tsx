import { Outlet } from "react-router-dom";
import ChatBox from "./ChatBox";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/post");
  }, []);

  return (
    <div>
      <nav className="border-b-2 border-primary py-4 mb-7"></nav>
      <main className="flex-1 overflow-auto">
        <div className="mx-auto w-full md:w-10/12 lg:w-9/12 p-4 h-full">
          <Outlet />
          <ChatBox />
          <Toaster />
        </div>
      </main>
    </div>
  );
}
