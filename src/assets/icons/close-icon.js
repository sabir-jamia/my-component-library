import React from 'react';
import styled from '@emotion/styled';

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden='true'>
    <path
      d='M24 1.53784L22.4622 0L12 10.4622L1.5375 0L0 1.53784L10.4625 12L0 22.4622L1.5375 24L12 13.5378L22.4622 24L24 22.4622L13.5381 12L24 1.53784Z'
      fill='black'
    />
  </CloseIconWrapper>
);
