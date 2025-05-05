import React, { useState } from "react";
import styles from "./ChatWidget.module.css"; // Import the CSS for styling

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false); // To toggle chat widget visibility
  const [message, setMessage] = useState(""); // To manage user input
  const [messages, setMessages] = useState([]); // To hold the chat messages

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle chat widget visibility
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (message.trim()) {
      setMessages([
        ...messages,
        { sender: "user", text: message },
      ]);
      setMessage("");

      // Simulate an agent response (this can be replaced with backend logic)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "agent", text: "How can I assist you today?" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className={styles.chatWidget}>
      <button onClick={handleToggle} className={styles.toggleButton}>
        {isOpen ? "Close Chat" : "Chat with us"}
      </button>

      {isOpen && (
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <span>Live Support</span>
            <button onClick={handleToggle} className={styles.closeButton}>
              X
            </button>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${styles[msg.sender]}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className={styles.chatInputForm}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className={styles.inputField}
            />
            <button type="submit" className={styles.sendButton}>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
