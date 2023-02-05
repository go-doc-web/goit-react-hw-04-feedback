import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const stylePersent = positivePercentage <= 50 ? styles.bad : styles.good;
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        good:
        <span className={styles.good}> {good}</span>
      </li>
      <li className={styles.item}>
        neutral: <span className={styles.neutral}> {neutral}</span>
      </li>
      <li className={styles.item}>
        bad: <span className={styles.bad}> {bad}</span>
      </li>
      <li className={styles.item}>
        total: <span> {total}</span>
      </li>
      <li className={styles.item}>
        positive percentage:{' '}
        <span className={stylePersent}> {positivePercentage} %</span>
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
