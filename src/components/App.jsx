import { useState } from 'react';

import styles from './App.module.scss';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;

  const positivePercentage = (good, total) => {
    if (!total) {
      return;
    }
    return +((good / total) * 100).toFixed(2);
  };

  const handlefeedbackBtn = name => {
    setFeedback(prevState => {
      const value = prevState[name];
      return { ...feedback, [name]: value + 1 };
    });
  };

  const optionsFeedback = Object.keys(feedback);

  return (
    <div className={styles.wrapper}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={optionsFeedback}
          onClickFeedbackBtn={handlefeedbackBtn}
        />
      </Section>

      {total ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage(good, total)}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default App;

// class App extends Component {
//   state = {
// good: 0,
// neutral: 0,
// bad: 0,
//   };

// positivePercentage = (good, total) => {
//   if (!total) {
//     return;
//   }
//   return +((good / total) * 100).toFixed(2);
// };

//   handlefeedbackBtn = name => {
//     this.setState(prevstate => ({
//       [name]: prevstate[name] + 1,
//     }));
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     const positivePercentageFeedback = this.positivePercentage(good, total);
//     const optionsFeedback = Object.keys(this.state);

// return (
//   <div className={styles.wrapper}>
//     <Section title={'Please leave feedback'}>
//       <FeedbackOptions
//         options={optionsFeedback}
//         onClickFeedbackBtn={this.handlefeedbackBtn}
//       />
//     </Section>

//     {total ? (
//       <Section title={'Statistics'}>
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={total}
//           positivePercentage={positivePercentageFeedback}
//         />
//       </Section>
//     ) : (
//       <Notification message="There is no feedback" />
//     )}
//   </div>
//     );
//   }
// }

// export default App;
