import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notofication/Notofication';
import { Container } from './App.styled';
export const App = () => {
  const output = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad',
  };
  const options = ['good', 'neutral', 'bad'];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const giveFeedbackHandler = e => {
    const { name } = e.target;
    switch (name) {
      case options[0]:
        setGood(state => state + 1);
        break;
      case options[1]:
        setNeutral(state => state + 1);
        break;
      case options[2]:
        setBad(state => state + 1);
        break;
      default:
        throw new Error('Unsupported option type: ' + name);
    }
  };

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round(Number(good / (bad + good + neutral)) * 100);
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={giveFeedbackHandler}
          options={options}
          output={output}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
