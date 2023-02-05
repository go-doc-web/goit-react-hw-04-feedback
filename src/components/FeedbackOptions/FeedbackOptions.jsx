import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onClickFeedbackBtn }) => {
  const elements = options.map((item, index) => {
    return (
      <li key={index}>
        <button
          onClick={() => onClickFeedbackBtn(item)}
          type="button"
          className={` ${styles.button} ${styles.raised} ${styles[item]}`}
        >
          {item}
        </button>
      </li>
    );
  });
  return <ul className={styles.list}>{elements}</ul>;
};

export default FeedbackOptions;

FeedbackOptions.defaultProps = {
  options: ['good', 'neutral', 'bad'],
};

FeedbackOptions.propTypes = {
  onClickFeedbackBtn: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
