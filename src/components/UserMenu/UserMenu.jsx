import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { UserName } from 'components/Header/Header.styled';
import { useSelector } from 'react-redux';
import { selectUserEmail, selectUserName } from 'redux/auth/selectors.auth';

export default function UserMenu() {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  return (
    <Box sx={{ mr: '10px' }}>
      <Typography textAlign="center">
        {<UserName>{userName}</UserName>}
      </Typography>
      <Typography textAlign="center">
        {<UserName>{userEmail}</UserName>}
      </Typography>
    </Box>
  );
}
