import React from "react";
import io from "socket.io-client";
import { useState } from "react";

const socket = io.connect("http://localhost:5000");

function chat() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Room id"
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}> join</button>
    </div>
  );
}

export default chat;
