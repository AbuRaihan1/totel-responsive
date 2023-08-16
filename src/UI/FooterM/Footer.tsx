import React from 'react';
import styles from '../../styles/Footer.module.css';

type FooterProps = {
  nextStep: () => void;
  backStep: () => void;
};

const Footer: React.FC<FooterProps> = ({ nextStep, backStep }) => {
  return (
    <>
      <div>
        <footer className={styles.ft}>
          <div className={styles.ft1}>
            <div>
              <button className={styles.button2} onClick={backStep}>
                Back
              </button>
            </div>
            <div>
              <button className={styles.button1} onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
