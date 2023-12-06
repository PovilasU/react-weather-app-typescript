
import React from 'react';


interface FormFieldProps {
    title: string;
    name: string;
}

const FormField: React.FC<FormFieldProps> = ({ title, name }) => {
    return (
        <div>
            {/* Your component code here */}
            <label>{title}</label>
            <input type="text" name={name} autoComplete="off" />
        </div>
    );
};

export default FormField;


