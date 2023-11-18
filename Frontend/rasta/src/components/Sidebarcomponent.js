import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import locationicon from '../assets/sidebar/locationicon.png'
import pointericon from '../assets/sidebar/pointericon.png'
import calendericon from '../assets/sidebar/calendericon.png'
import directionicon from '../assets/sidebar/directionicon.png'
import defecticon from '../assets/sidebar/defecticon.png'

const SidebarContainer = styled('div')({
  width: '345px',
  height: '100%',
  backgroundColor: '#f0f0f0',
  position: 'fixed',
  top: '0',
  right: '0',
});

const ImageBox = styled(Box)({
  width: '300px',
  height: '200px',
  marginTop: '40px',
  marginLeft: '20px',
  borderRadius: 2,
  overflow: 'hidden',
});
const LocationBox = styled(Box)({
  width: '320px',
  marginTop: '70px',
  marginLeft: '10px',
  height: '64px',
  borderRadius: 1,
  zIndex: 4,
  backgroundColor: '#F97400',
  '&:hover': {
    backgroundColor: '#F97400',
  },
  position: 'relative',
  boxShadow: '0px 24px 19px -17px rgba(0, 0, 0, 0.57)',
  display: 'flex',
  alignItems: 'center', // Center align vertically
  justifyContent: 'center', // Center align horizontally
});

const Sidebar = ({ showSidebar,routeNames,imagePath, handleSidebarToggle,latitude,longitude}) => {

  React.useEffect(() => {
    console.log("SIDEEEEEEEEEEEEEEEEEEEEEEE", imagePath,routeNames);
  }, [imagePath]);

  return (
    <SidebarContainer>
        <div style={{paddingTop:'4px'}}><button onClick={handleSidebarToggle}>Close Sidebar</button></div>

        <ImageBox>
          {imagePath && <img src={imagePath} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
        </ImageBox>
      
    
         <LocationBox>
         <img
        src={pointericon}
        alt="Icon"
        style={{
          width: '24px',
          height: '24px',
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translate(-50%, -50%)',
        }}
      />
          <Typography variant="h6" sx={{ color: '#FFFFFF',paddingRight:'10%',font:'Inter',fontSize:'12px' }}>
            Location
            <br></br>
            {routeNames}
          </Typography>
          
         </LocationBox>
    <Box component="section" sx={{  width:320,
        marginTop:'-3px',
         marginLeft:'10px',
          height:64,
          borderRadius:1,
          zIndex:3,
          bgcolor: '#FFFFFF',
          '&:hover': {
            bgcolor: '#FFFFFF',
            
          },position: 'relative',
          boxShadow: '0px 14px 11px -17px rgba(0, 0, 0, 0.57)',
          display: 'flex',
          alignItems: 'center', // Center align vertically
          justifyContent: 'center', // Center align horizontally
          }}>
                  <img
        src={locationicon}
        alt="Icon"
        style={{
          width: '24px',
          height: '24px',
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translate(-50%, -50%)',
        }}
        
      />

      <Typography variant="h6" sx={{ color: '#86878B',paddingLeft:'10%',font:'Inter',fontSize:'12px' }}>
                  Latitude & Longitude
                  <br></br>
                  {latitude},{longitude}
                </Typography>
    </Box>
    <Box component="section" sx={{  width:320,
        marginTop:'-3px',
         marginLeft:'10px',
          height:64,
          borderRadius:1,
          zIndex:2,
          bgcolor: '#FAD0B4',
          '&:hover': {
            bgcolor: '#FAD0B4',
            
          },position: 'relative',
          boxShadow: '0px 14px 11px -17px rgba(0, 0, 0, 0.57)',
          display: 'flex',
          alignItems: 'center', // Center align vertically
          justifyContent: 'center', // Center align horizontally
          }}>
     <img
        src={directionicon}
        alt="Icon"
        style={{
          width: '24px',
          height: '24px',
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <Typography variant="h6" sx={{ color: '#86878B',paddingRight:'40%',font:'Inter',fontSize:'12px' }}>
                  Direction
                  <br></br>
                    
                </Typography>
    </Box>
    <Box component="section" sx={{  width:320,
        marginTop:'-3px',
         marginLeft:'10px',
          height:64,
          borderRadius:1,
          zIndex:1,
          bgcolor: '#FFFFFF',
          '&:hover': {
            bgcolor: '#FFFFFF',
            
          },position: 'relative',
          boxShadow: '0px 24px 19px -17px rgba(0, 0, 0, 0.57)'
          }}>
             <img
        src={calendericon}
        alt="Icon"
        style={{
          width: '24px',
          height: '24px',
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translate(-50%, -50%)',
        }}
      />
        </Box>
     <Box component="section" sx={{  width:320,
         marginTop:'-3px',
         marginLeft:'10px',
          height:64,
          borderRadius:1,
          bgcolor: '#F97400',
          '&:hover': {
            bgcolor: '#F97400',
            
          },position: 'relative',
          }}>
     <img
        src={defecticon}
        alt="Icon"
        style={{
          width: '24px',
          height: '24px',
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </Box>
    
    </SidebarContainer>
  );
};  

export default Sidebar;