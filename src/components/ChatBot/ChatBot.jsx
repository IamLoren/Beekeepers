import { useState } from 'react';
import { useSelector } from 'react-redux';
import ChatBot from 'react-simple-chatbot';
import sprite from '../../assets/sprite.svg';
import chatBot from '../../assets/chatBot.png';
import { selectDailyPortions } from '../../redux/selectors';
import { ThemeProvider } from 'styled-components';
import { ButtonClose, ChatBotWrapper, OpenBtn } from './ChatBot.styled';

const ChatBotComponent = () => {
  const dailyPortions = useSelector(selectDailyPortions);

  const theme = {
    background: 'var(--card-bg-color)',
    fontFamily: 'Roboto Medium',
    headerBgColor: 'var(--secondary-text)',
    headerFontColor: 'var(--white-text)',
    headerFontSize: '16px',
    botBubbleColor: 'var(--secondary-text)',
    botFontColor: 'var(--white-text)',
    userBubbleColor: 'var(--accent-bg-color)',
    userFontColor: 'var(--secondary-text)',
  };

  const reminderMsg = () => {
    let msg = '';
    if (dailyPortions.length === 0) {
      msg =
        'I see that it is difficult for you to start this good habit. Do you want me to tell you in detail why this is so important?';
    } else {
      msg =
        'I see that you have already made an effort to take care of yourself today. Do you want me to tell you in more detail why this is so important?';
    }
    return msg;
  };

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <ChatBotWrapper>
      {!open ? (
        <OpenBtn onClick={handleToggle}>
          <img src={chatBot} alt="Chat Bot Icon" />
        </OpenBtn>
      ) : (
        <>
          <ButtonClose type="button" onClick={handleToggle}>
            <svg>
              <use href={`${sprite}#icon-close`} />
            </svg>
          </ButtonClose>
          <ThemeProvider theme={theme}>
            <ChatBot
              steps={[
                {
                  id: '1',
                  message:
                    'Hello, friend! What will help you achieve your goal today?',
                  trigger: '2',
                },
                {
                  id: '2',
                  options: [
                    { value: 1, label: 'Friendly support', trigger: '3' },
                    {
                      value: 2,
                      label:
                        'A reminder of the benefits of following a water balance',
                      trigger: '4',
                    },
                  ],
                },
                {
                  id: '3',
                  message:
                    'Success in life is achieved by someone who knows how to move from failure to failure without losing enthusiasm. Therefore, if even today you did not achieve your goal, start all over again tomorrow. No grain dropped into the ground will be wasted',
                  trigger: '7',
                },
                {
                  id: '4',
                  message: reminderMsg(),
                  trigger: '5',
                },
                {
                  id: '5',
                  options: [
                    { value: 1, label: 'Yes', trigger: '6' },
                    {
                      value: 2,
                      label: 'No',
                      trigger: '8',
                    },
                  ],
                },
                {
                  id: '6',
                  message:
                    'Water is essential for maintaining good health and overall well-being. Staying hydrated is crucial for the proper functioning of our bodies as it helps regulate body temperature, aids digestion, transports nutrients, and flushes out toxins. Adequate hydration supports cognitive function, boosts energy levels, and promotes radiant skin. By drinking enough water throughout the day, we can optimize our physical and mental performance, enhance our immune system, and maintain a healthy balance in our bodies. Remember, hydration is key to feeling and performing our best every day.',
                  trigger: '7',
                },
                {
                  id: '7',
                  message: "Don't give up, champ! You can do it!",
                  end: true,
                },
                {
                  id: '8',
                  message:
                    "Well, then, good luck, and if you need me, I'm here.",
                  end: true,
                },
              ]}
              //   handleEnd={handleToggle}
            />
          </ThemeProvider>
        </>
      )}
    </ChatBotWrapper>
  );
};

export default ChatBotComponent;
