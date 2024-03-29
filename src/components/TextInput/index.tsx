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
    <div className='flex flex-col gap-y-[3px] md:gap-y-2'>
      {label && (
        <label className='text-xs md:text-sm text-[#022959]' htmlFor={name}>
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
        className='border rounded-lg border-gray-300 outline-none p-4 text-[15px] md:text-base font-medium text-[#022959] focus:border-[#483EFF] transition-all duration-300'
        readOnly={readOnly}
        {...props}
      />
    </div>
  );
};
