import styled from 'styled-components';
import posed from 'react-pose';
import Grid from '@material-ui/core/Grid';
import { cardProps } from 'layout/pose';

const Page = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: ${props => props.theme.color.black.primary};
  color: ${props => props.theme.color.white.secondary};
`;

const Gallery = styled(Grid)`
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled(Grid)`
  height: 100vh;
`;

const ListColor = styled(Grid)`
  background-color: transparent;

  > li {
    border-top: 0px;
  }

  > li:hover {
    background-color: transparent;
  }
`;

const Card = styled(posed.div(cardProps))`
  background-color: ${props => props.theme.color.white.secondary};
  color: ${props => props.theme.color.darkGray.primary};
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  margin: 1em auto;

  div:first-child {
    text-align: center;
  }
`;

export { Page, Row, ListColor, Card, Gallery };
