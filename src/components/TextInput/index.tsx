import React from 'react';

interface TextInputProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: 'text' | 'email' | 'number' | 'tel' | 'url' | 'date';
  name: string;
  value: string | number;
  autoFocus?: boolean;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

export const TextInput = ({
  label = 'Label',
  placeholder,
  type = 'text',
  required = false,
  name,
  autoFocus = false,
  value,
  readOnly,
  handleInputChange,
  ...props
}: TextInputProps) => {
  return (
    <div className='input--container'>
      {label && (
        <label className='input--label' htmlFor={name}>
          {label}
          {required && <span className='input--required'></span>}
        </label>
      )}
      <input
        placeholder={placeholder}
        onChange={handleInputChange}
        value={value}
        autoFocus={autoFocus}
        required={required}
        type={type}
        id={name}
        name={name}
        className=''
        readOnly={readOnly}
        {...props}
      />
    </div>
  );
};
