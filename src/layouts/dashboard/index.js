import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider'; 
import IconButton from '@mui/material/IconButton';
import {Gear} from 'phosphor-react'; 
import { useTheme,styled } from '@mui/material/styles';
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from '../../data';
import { Avatar } from '@mui/material';
import { faker } from '@faker-js/faker';
import {Switch} from '@mui/material';
import useSettings from "../../hooks/useSettings";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const {onToggleMode} = useSettings();


  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        height: '100vh',
        width: 100,
      }}
    >
      <Stack 
      direction="column" 
      alignItems="{center}" 
      justifyContent="space-between"
      sx={{ height: '100%' }} 
      spacing={3}>
        <Stack alignItems="{center}" spacing={4} >
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
            el.index === selected ?
            <Box p={1} sx={{backgroundColor:theme.palette.primary.main, borderRadius: 1.5}}>
              <IconButton 
              sx={{width:"max-content",color:"#fff"}}
              key={el.index}
              >
                {el.icon}</IconButton>
            </Box>
           :
           <IconButton 
           onClick={() =>{
            setSelected(el.index)
           }}
           sx={{width:"max-content",color:"#000"}}
           key={el.index}
           >
             {el.icon}</IconButton>
         
          
          ))}
          <Divider sx={{width:"48px"}} />
          {selected===3 ?
          <Box 
            p={1} 
            sx={{backgroundColor:theme.palette.primary.main, 
            borderRadius: 1.5,

          }}
          >
            <IconButton>
            <Gear />
          </IconButton>
          </Box>
          : <IconButton
          
          
          onClick={() =>{
           setSelected(3)
           
          }}
          sx={{width:"max-content",color:"#000"}}
          >
          <Gear />
        </IconButton>
          }
          
        
        </Stack>
        
        </Stack>
        <Stack alignItems={"center"}spacing={4}>
        <AntSwitch defaultChecked />
        <Avatar src={faker.image.avatar()}/>
        </Stack>
       
      </Stack>
    </Box>
  );
}

export default DashboardLayout;
