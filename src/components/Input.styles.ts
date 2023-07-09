import styled, { css } from 'styled-components'

interface InputContainerProps {
  widthInRem: number
  optional?: boolean
}

export const InputContainer = styled.div<InputContainerProps>(
  (props) => css`
    label {
      display: none;
    }

    input {
      width: ${props.widthInRem > 0 ? `${props.widthInRem}rem` : '100%'};
      padding: 0.75rem;
      border: 1px solid ${props.theme.colors['base-button']};
      background-color: ${props.theme.colors['base-input']};
      color: ${props.theme.colors['base-text']};

      &::placeholder {
        color: ${props.theme.colors['base-label']};
      }

      ${props.optional &&
      css`
        &::after {
          content: 'optional';
          position: absolute;
          right: 0;
        }
      `}
    }
  `,
)
