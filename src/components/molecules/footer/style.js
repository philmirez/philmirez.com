import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

const Footer = styled.footer`
  border-top: 1px solid ${props => props.theme.color.darkGray.primary};
  padding: 30px 1em;
  font-size: 14px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 100%;
`

const FooterRow = styled(Grid)`
  
`

export { Footer, FooterRow }
