import PropTypes from 'prop-types';

import styles from './Section.module.scss';

const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
