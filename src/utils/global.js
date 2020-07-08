import React from 'react';
import { Global, css } from '@emotion/core';
import { primaryFont } from './typography';
import { normalize } from 'polished';

export const GlobalStyle = () => (
  <Global
    styles={css`
      ${normalize()}
      html {
        font-size: 16px;
        box-sizing: border-box;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        font-family: ${primaryFont};
      }

      main {
        width: 90%;
        margin: 0 auto;
      }
    `}
  ></Global>
);
