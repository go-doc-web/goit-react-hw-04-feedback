import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

const Notification = ({ message }) => {
  return (
    <div className={styles.message}>
      <p className={styles.text}>{message}</p>
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
