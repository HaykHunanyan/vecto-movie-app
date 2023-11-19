import styled,{css} from 'styled-components';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';

interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
  width?: string;
  height?: number;
  br?: number;
  mt?: number;
  mb?: number;
  bordercolor?: string;
  type?: 'play' | 'more';
}

const Button = styled(AntdButton)<ButtonProps>`
  height: 44px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  border: none;
  font-weight: 500;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  font-family: 'Open Sans';
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    box-shadow: none !important;
  }
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
    ${props =>
      props.height &&
      css`
      height: ${props.height}px;
      `}
  ${props =>
    props.br &&
    css`
      border-radius: ${props.br}px !important;
    `}
    ${props =>
    props.mt &&
    css`
      margin-top: ${props.mt}px;
    `}
    ${props =>
    props.mb &&
    css`
      margin-bottom: ${props.mb}px;
    `}
   
    ${props =>
    props.type === 'play' &&
    css`
      background: #fff;
      &:hover {
        background: #d7cfcf;
      }
      &:active {
        background: #d7cfcf;
      }
      &:focus {
        background: #d7cfcf;
      }
      &[disabled] {
        background: #e7e7e7;
        color: #616161;
      }
    `}
    ${props =>
      props.type === 'more' &&
      css`
        background: #061985;
        &:hover {
          background: #132799;
        }
        &:active {
          background: #132799;
        }
        &:focus {
          background: #132799;
        }
        &[disabled] {
          background: #e7e7e7;
          color: #616161;
        }
      `}
  @media (max-width: 992px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

Button.propTypes = {
};

Button.defaultProps = {};

export default Button;
