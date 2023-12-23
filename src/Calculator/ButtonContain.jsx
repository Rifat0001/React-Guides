import styles from './Calculator.module.css'
const ButtonContain = ({ buttons, buttonClick }) => {

    return (
        <div className={`${styles.btnContain} `}>
            {
                buttons.map((btn) => (
                    <button onClick={() => buttonClick(btn)} className={`btn btn-primary  ${styles.Btn} `} key={btn}>{btn}</button>
                ))
            }
        </div>
    );
};

export default ButtonContain;