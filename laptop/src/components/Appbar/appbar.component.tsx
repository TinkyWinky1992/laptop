import React from 'react';
import { Box, Grid } from '@mui/material';
import { BellIcon, FlowbiteIcon, VolumeIcon, WifiIcon } from '../../icons';
import { DateWatch, TimeWatch } from '../watch';

export const MainAppBar: React.FC = () => {
    return (
        <Grid container sx={{
            display: "flex",
            width: '100%',
            height: '7%',
            flexShrink: 0,
            backgroundColor: 'rgba(35, 35, 35, 0.40)', 
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', 
            backdropFilter: 'blur(30px)',
            alignItems: "center",
            justifyContent: "space-between",
            position: 'absolute',
            borderTop: '1px solid #515151',
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: "3rem",
                flex: "1 0 0",
                alignSelf: "stretch",
                boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
                paddingRight: '1rem'
            }}>

            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                paddingRight: '2rem'
            }}>
                <FlowbiteIcon />
                <VolumeIcon />
                <WifiIcon />
                <TimeWatch/>
                <DateWatch />            
                <BellIcon />
            </Box>
        </Grid>
    );
};
