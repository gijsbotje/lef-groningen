import styled from 'styled-components';
import MuiContainer from '@material-ui/core/Container';

const Container = styled(MuiContainer)`
  padding-top: ${props => props.theme.spacing(6)}px;
  padding-bottom: ${props => props.theme.spacing(6)}px;
`;

Container.defaultProps = {
  maxWidth: 'lg',
};

export default Container;
