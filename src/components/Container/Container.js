import styled from 'styled-components';
import MuiContainer from '@material-ui/core/Container';

const Container = styled(MuiContainer)`
  && {
    padding-top: ${props => props.theme.spacing(6)}px;
    // padding-right: ${props => props.theme.spacing(5)}px;
    padding-bottom: ${props => props.theme.spacing(6)}px;
    // padding-left: ${props => props.theme.spacing(5)}px;

    // @media (min-width: ${props => props.theme.breakpoints.values.sm}px) {
    //   padding-right: ${props => props.theme.spacing(8)}px;
    //   padding-left: ${props => props.theme.spacing(8)}px;
    // }
  }
`;

Container.defaultProps = {
  maxWidth: 'md',
};

export default Container;
