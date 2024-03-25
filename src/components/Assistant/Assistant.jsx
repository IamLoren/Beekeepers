import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer,  MessageList, Message, MessageInput, TypingIndicator} from '@chatscope/chat-ui-kit-react';
import { useState } from 'react';
import { selectVariable } from "../../redux/selectors";
import { useSelector } from "react-redux";

const Assistant = () => {
  const KEY = useSelector(selectVariable);
const [isTyping, setIsTyping] = useState(false);
const [messages, setMessages] = useState([
  {
    message: "Hello, I am your personal water assistant. I wil help you stay hydrated. How can I help you today?",
    sender: "assistant"
  }
]);

const handleSend = async (message) => {
  const newMessage = {
    message: message,
    sender: "user",
    direction: "outgoing"
  }

  const newMessages = [...messages, newMessage];

  setMessages(newMessages);
  setIsTyping(true);

  await processMessageToChatGPT(newMessages);
}

async function processMessageToChatGPT(messages) {
  let apiMessages = messages.map((message) => {
    let role = "";
    if(message.sender === "ChatGPT") {
      role = "assistant";
    } else {
      role = "user";
    }
    return {
      role: role,
      content: message.message
    }
  });

const systemMessage = {
  role: "system",
  content: "motivate interlocutor to keep water balance, drink water regularly, to give short  motivated tips (2-3 sentenses)"

}

const apiRequestBody = {
  "model": "gpt-3.5-turbo",
  "messages": [
    systemMessage,
    ...apiMessages
  ]
}

  await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " +  KEY,
    },
    body: JSON.stringify(apiRequestBody)
  })
  .then(response => response.json())
  .then(data => {
      console.log(data.choices[0].message.content);
      setMessages(
        [...messages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }]
      );
      setIsTyping(false);
  })
  .catch(error => {
      console.error('Error:', error);
  });

}

  return (
    <div style={{ position: "relative", height: "480px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={isTyping && <TypingIndicator content="Your assistant try to care of you" />}
            >
              {messages.map((message, i) =>{
                return (
                  <Message
                    key={i}
                    model={{
                      message: message.message,
                      sentTime: 'Just Now',
                      sender: message.sender
                    }}
                  />
                )
              } )}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend}/>
        </ChatContainer>
      </MainContainer>
    </div>
  )
}

export default Assistant