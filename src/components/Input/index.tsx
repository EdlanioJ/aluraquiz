import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`;

type InputProps = InputHTMLAttributes<HTMLInputElement>;
export default function Input({ onChange, placeholder, ...props }: InputProps) {
  return (
    <div>
      <InputBase placeholder={placeholder} onChange={onChange} {...props} />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};
