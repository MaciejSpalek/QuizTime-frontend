import styled from 'styled-components'
import { FlexColumn } from '../../../theme/Mixins'

export const StyledContainter = styled.div`
    ${FlexColumn};
    padding: 10px;
    overflow-y: scroll;
    height: calc(100vh - 60px - 60px);
`