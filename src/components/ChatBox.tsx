import { useEffect, useState } from "react";
import chatIcon from "@/assets/chat.svg";
import useClickOutside from "@/hooks/useClickOutside";
import useSocket from "@/hooks/useSocket";

export default function ChatBox() {
  const socket = useSocket();
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  // Welcome 👋, this is a message from the server using socket

  useEffect(() => {
    // Listen for 'onMessage' event from the server
    if (!socket) return;
    socket.on("onMessage", setMessage);
  }, [socket]);

  const toggleChatBox = () => {
    setOpen((prev) => !prev);
  };

  const chatboxRef = useClickOutside(() => {
    setOpen(false);
  });

  const chatOpenStyle = open
    ? "w-[250px] bg-white p-3 rounded-3xl rounded-br-[2rem] flex flex-col gap-4"
    : "rounded-full";

  return (
    <div
      ref={chatboxRef}
      style={{ boxShadow: "0px -9px 18px 0px #AAAAAA26" }}
      className={`${chatOpenStyle} fixed bottom-8 right-8 z-20 `}
    >
      {open && (
        <div className="p-3 rounded-xl bg-[#F5F5F5] text-sm text-dark-10">
          {message ? message : "Ops nothing here"}
        </div>
      )}

      <div
        onClick={toggleChatBox}
        className="self-end cursor-pointer bg-primary shadow-lg h-14 w-14 rounded-full flex items-center justify-center"
      >
        <img src={chatIcon} alt="" className="w-7 h-7" />
      </div>
    </div>
  );
}
