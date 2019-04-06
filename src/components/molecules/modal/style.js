import styled from "styled-components";
import Modal from 'react-rainbow-components/components/Modal';
import { contactProps } from "./pose";

const Contact = styled(Modal)`
  height: 100vh;
  width: 100%;
  color: ${props => props.theme.color.black.secondary};
  background-color: ${props => props.theme.color.lightGray.primary};

  > header {
    border-radius: 3px 3px 0px 0px;

    > h2 {
      color: ${props => props.theme.color.darkGray.primary};
    }
  }

  > footer {
    background-color: ${props => props.theme.color.darkGray.primary};
    border-radius: 0px 0px 3px 3px;
  }
`;

export { Contact };
