import styled from 'styled-components'
import { FlexCenter } from '../../styles/mixins'

export const StyledContainer = styled.div`
  ${FlexCenter};
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  height: calc(100vh - 60px);
`