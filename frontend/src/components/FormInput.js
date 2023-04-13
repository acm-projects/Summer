import { useState } from "react";
import styles from "../pages/styles/LogIn.module.css";

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className={styles.formInput}>
            <label className={styles.loginLabel}>{label}</label>
            <input
                className={styles.logInput}
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span className={styles.span}>{errorMessage}</span>
        </div>
    );
};

export default FormInput;