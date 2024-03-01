import React from "react";
import chatIcon from "@/assets/chat.svg";

export default function ChatBox() {
  return (
    <div className="fixed bottom-12 right-12 z-20">
      <div className="cursor-pointer bg-primary shadow-lg h-14 w-14 rounded-full flex items-center justify-center">
        <img src={chatIcon} alt="" className="w-7 h-7" />
      </div>
    </div>
  );
}
