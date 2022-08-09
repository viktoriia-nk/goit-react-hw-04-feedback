import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // }

  const onLeaveFeedback = (e) => {
    
    const name = e.currentTarget.name

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

        default:
          0
    }
    
  }

  const CountTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    const total =  CountTotalFeedback()
    const posFeed = Math.round((good / total) * 100);
    return posFeed
  }

  
    return (
      <div className='div'>
        <Section title="Please leave a feedback">
            <FeedbackOptions 
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={onLeaveFeedback}
            />
          </Section>
          {CountTotalFeedback() === 0 ? 
          (<Notification message='There is no feedback'/>) : 
          (<Section title="Statistics">
          <Statistics
           good={good}
           neutral={neutral}
           bad={bad}
           total={CountTotalFeedback()}
           positiveFeedback={countPositiveFeedbackPercentage()}
          />
        </Section>)} 
      </div>
    );
};


export default App;
