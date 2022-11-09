import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const ContactCard = styled(Paper)`
  padding: 8px 16.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactDescription = styled.div`
  font-family: 'Patrick Hand', cursive;
  font-size: 20px;
`;
export const ContactName = styled.span`
  font-size: 22px;
`;
export const ContactNumber = styled.span`
  margin-left: 10px;
`;

export const ButtonsList = styled.ul`
  display: flex;
  gap: 10px;
`;
