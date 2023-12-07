import React, { FC } from "react";

interface FormFieldProps {
    title: string;
    name: string;
    placeholder: string;
}

const FormField: FC<FormFieldProps> = ({ title, name, placeholder }) => (
    <div className="form-field">
        <label>{title}</label>
        <input
            type="text"
            name={name}
            autoComplete="off"
            placeholder={placeholder}
        />
    </div>
);

export default React.memo(FormField);
