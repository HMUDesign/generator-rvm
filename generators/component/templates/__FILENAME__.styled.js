import styled from 'styled-components';

export const Container = styled.div`
  padding: 4em 2em;
  background: ${props => props.theme.background};
  color: ${props => props.theme.foreground};
`;
