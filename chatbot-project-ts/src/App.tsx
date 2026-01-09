import React, { useState, useEffect } from "react";
import { Chatbot } from "supersimpledev";
import { ChatInput } from "./components/ChatInput";
import RobotProfileImage from "./assets/robot.png";
import ChatMessages from "./components/ChatMessages";

import "./App.css";

function App() {
  // const [chatMessages, setChatMessages] = React.useState([
  //   {
  //     message: "hello Chatbot",
  //     sender: "user",
  //     id: "id1",
  //   },
  //   {
  //     message: "hello! How can I help you?",
  //     sender: "robot",
  //     id: "id2",
  //   },
  //   {
  //     message: "can you get me today date?",
  //     sender: "user",
  //     id: "id3",
  //   },
  //   {
  //     message: "Today is Decembre 15",
  //     sender: "robot",
  //     id: "id4",
  //   },
  // ]);

  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("message")) || []
  );
  useEffect(() => {
    console.log("useEffect ran");
    Chatbot.addResponses({
      goodbye: "Goodbye. Have a great day!",
      "give me a unique id": function () {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      },
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  const title = `${chatMessages.length} Messages`;
  return (
    <>
      {/* <title>Chatbot Project</title> */}
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href={RobotProfileImage} />

      <div className="app-container">
        {chatMessages.length === 0 && (
          <p className="welcome-message">
            Welcome to the chatbot project! Send a message using the text box
            below.
          </p>
        )}

        <ChatMessages chatMessages={chatMessages} />
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    </>
  );
}

export default App;
