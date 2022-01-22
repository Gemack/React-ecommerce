import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 500px) {
      ${props}
    } ;
  `;
};

export const tablet = (props) => {
  return css`
    @media (min-width: 501px) and (max-width: 768px) {
      ${props}
    }
  `;
};
export const tablet2 = (props) => {
  return css`
    @media (min-width: 769px) and (max-width: 1200px) {
      ${props}
    }
  `;
};
