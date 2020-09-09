import styled from 'styled-components'
import { FlexCenter } from '../../theme/Mixins'

export const StyledContainer = styled.div`
  ${FlexCenter};
  align-items: flex-start;
  position: relative;
  height: calc(100vh - 60px);
`