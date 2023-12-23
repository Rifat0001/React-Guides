import styles from './Calculator.module.css'
const Display = ({display}) => {
    return (
        <div>
            <input value={display} readOnly className={`border-2  px-4 py-3 mb-3 ${styles.display} `} type="display" />
        </div>
    );
};

export default Display;