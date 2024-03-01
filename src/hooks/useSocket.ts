import { useState, useEffect } from "react";
import io, { Socket } from "socket.io-client";

const socketUrl = import.meta.env.VITE_API_URL;

export default function useSocket() {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io(socketUrl);
    setSocket(socketIo);

    return () => {
      socketIo.disconnect();
    };
  }, []);

  return socket;
}
