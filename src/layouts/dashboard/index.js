import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider'; 
import IconButton from '@mui/material/IconButton';
import {Gear} from 'phosphor-react'; 
import { useTheme } from '@mui/material/styles';
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from '../../data';

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        height: '100vh',
        width: 100,
      }}
    >
      <Stack direction="column" alignItems="center" sx={{ width: '100%' }} spacing={3}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            height: 64,
            width: 64,
            borderRadius: 1.5,
          }}
        >
          <img src={Logo} alt="Chat App Logo" />
        </Box>
        <Stack
          sx={{ width: "max-content" }}
          direction="column"
          alignItems="center"
          spacing={3}
        >
          {Nav_Buttons.map((el) => (
            <IconButton key={el.index}>{el.icon}</IconButton>
          ))}
          <Divider />
          <IconButton>
            <Gear />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default DashboardLayout;
