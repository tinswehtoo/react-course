import React, { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

// function ChatMessages({ chatMessages }) {
//   const chatMessagesRef = React.useRef(null);

//   React.useEffect(() => {
//     const containerElem = chatMessagesRef.current;
//     if (containerElem) {
//       containerElem.scrollTop = containerElem.scrollHeight;
//     }
//   }, [chatMessages]);

type ChatMessagesProps = {
  chatMessages: {
    id: string;
    message: string;
    sender: string;
    time: number;
  }[];
};

export function useAutoScroll<T>(dependencies: T[]) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);
  return containerRef;
}

function ChatMessages({ chatMessages }: ChatMessagesProps) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            time={chatMessage.time}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
