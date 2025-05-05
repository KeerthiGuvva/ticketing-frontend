import React, { useState, useEffect } from "react";
import styles from "./ChatSupport.module.css"; // Import the CSS for styling

const ChatSupport = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // Manage chat visibility
  const [messages, setMessages] = useState([]); // Manage list of chat messages
  const [userMessage, setUserMessage] = useState(""); // Store user input

  // Simulate an agent response (this could later be replaced with API calls)
  const simulateAgentResponse = (userMessage) => {
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "agent", text: `Thank you for your message: "${userMessage}"` },
      ]);
    }, 1500);
  };

  // Toggle chat window visibility
  const handleToggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  // Handle message input changes
  const handleMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  // Handle message submission
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (userMessage.trim()) {
      setMessages([
        ...messages,
        { sender: "user", text: userMessage },
      ]);
      setUserMessage("");
      simulateAgentResponse(userMessage);
    }
  };

  useEffect(() => {
    // Automatically scroll to the bottom when a new message is added
    const chatMessages = document.getElementById("chatMessages");
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, [messages]);

  return (
    <div className={styles.chatSupport}>
      <button className={styles.chatButton} onClick={handleToggleChat}>
        {isChatOpen ? "Close Chat" : "Chat with Support"}
      </button>

      {isChatOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span>Support Chat</span>
            <button className={styles.closeButton} onClick={handleToggleChat}>X</button>
          </div>
          <div id="chatMessages" className={styles.chatMessages}>
            {messages.length === 0 ? (
              <div className={styles.noMessages}>Start the conversation...</div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`${styles.message} ${styles[msg.sender]}`}
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>
          <form onSubmit={handleSendMessage} className={styles.chatForm}>
            <input
              type="text"
              value={userMessage}
              onChange={handleMessageChange}
              placeholder="Type a message..."
              className={styles.messageInput}
            />
            <button type="submit" className={styles.sendButton}>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatSupport;
