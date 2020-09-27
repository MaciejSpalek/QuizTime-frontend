import styled from 'styled-components';

export const StyledWrapper = styled.div`
  border-radius: 4px;
  width: 100%;
  height: auto;
  border: 2px solid ${({theme}) => theme.colors.Neutral80};
  margin: 10px 0;
`;

export const StyledSelectCaption = styled.span`
  color: ${({theme}) => theme.colors.Neutral20};
  font-weight: bold;
`;

export const StyledTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 50px;
  padding: 0 10px;
`;

export const StyledSelect = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-height: 250px;
  list-style: none;
  margin-top: 10px;
  padding: 0 10px;
  overflow-y: auto;
`;
