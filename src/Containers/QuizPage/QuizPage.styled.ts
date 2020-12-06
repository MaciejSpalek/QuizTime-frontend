import styled from "styled-components";
import MultiStepForm from "Components/organisms/MultiStepForm";
import { FlexColumn } from "styles/mixins";

export const StyledMultiStepForm = styled(MultiStepForm)`
  height: calc(100vh - 60px);

  form {
    height: calc(100vh - 2 * 60px);
  }

  #pagination {
    bottom: 0;
  }
`;
