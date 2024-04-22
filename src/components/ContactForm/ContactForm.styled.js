import { styled } from "styled-components";
import { Form } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px 0;
  align-content: space-around;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
