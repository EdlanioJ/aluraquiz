import React from 'react';
import styled from 'styled-components';

interface CheckCircleProps {
  className?: string;
}

function Check({ className }: CheckCircleProps) {
  return (
    <svg
      width={43}
      height={43}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx={21.5} cy={21.5} r={21.5} fill="#4CAF50" fillOpacity={0.2} />
      <circle cx={21.5} cy={21.5} r={16.538} fill="#fff" />
      <path
        d="M21.5 4.962C12.404 4.962 4.96 12.404 4.96 21.5S12.404 38.038 21.5 38.038c9.096 0 16.538-7.442 16.538-16.538S30.596 4.962 21.5 4.962zm6.946 13.727l-7.938 7.938c-.662.662-1.654.662-2.316 0l-3.638-3.639c-.662-.661-.662-1.653 0-2.315.661-.661 1.654-.661 2.315 0l2.48 2.48 6.782-6.78c.661-.662 1.654-.662 2.315 0 .662.662.662 1.654 0 2.316z"
        fill="#4CAF50"
      />
    </svg>
  );
}

const CheckCircle = styled(Check)`
  margin: auto;
  margin-top: 10px;
  display: block;
`;

export default CheckCircle;
