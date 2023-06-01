 
import React from 'react';
import styled from '@emotion/styled';
 
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  children: React.ReactNode;
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  color? : string;
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}


// scss로 대체

const StyledButton = styled.button<ButtonProps>`
background: ${(props) => props.backgroundColor || 'black'};
color: ${(props) => props.color || 'white'};
font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-weight: 700;
border: 0;
border-radius: 3em;
cursor: pointer;
display: inline-block;
line-height: 1;
padding: 10px;

${(props)=> 
  props.primary && `
  color: white;
  background-color: #1ea7fd;
  padding: 12px 24px;
  `
}

${(props) =>
  props.size === 'large' &&
  `
  font-size: 16px;
  padding: 12px 24px;
`}
${(props) =>
  props.size === 'small' &&
  `
  font-size: 12px;
  padding: 10px 16px;
`}
`

/**
 * Primary UI component for user interaction
 */

export const Button = ({
  children,
  onClick,
  ...props
}: ButtonProps) => {
 
  return (
    <StyledButton  onClick={onClick}{...props}>
      {props.label}
    </StyledButton>
  );
};