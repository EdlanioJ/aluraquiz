import React from 'react';
import styled from 'styled-components';

interface TimesCircleProps {
  className?: string;
}
function Times({ className }: TimesCircleProps) {
  return (
    <svg
      width={52}
      height={52}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M34.038 17.962a2.166 2.166 0 00-3.076 0L26 22.945l-4.962-4.983a2.175 2.175 0 10-3.076 3.076L22.945 26l-4.983 4.962a2.166 2.166 0 000 3.076 2.166 2.166 0 003.076 0L26 29.055l4.962 4.983a2.166 2.166 0 003.076 0 2.166 2.166 0 000-3.076L29.055 26l4.983-4.962a2.166 2.166 0 000-3.076zm7.28-7.28a21.664 21.664 0 00-30.905-.269 21.667 21.667 0 00.268 30.905 21.668 21.668 0 0035.638-6.847 21.667 21.667 0 00-5-23.79zm-3.055 27.581A17.333 17.333 0 1143.333 26a17.223 17.223 0 01-5.07 12.263z"
        fill="#FF5722"
      />
    </svg>
  );
}

const TimesCircle = styled(Times)`
  margin: auto;
  margin-top: 10px;
  display: block;
`;

export default TimesCircle;
