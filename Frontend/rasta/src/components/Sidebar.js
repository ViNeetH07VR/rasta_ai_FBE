import React from 'react';
import Box from '@mui/material/Box';


const Sidebar = ({ showSidebar,imagePath, handleSidebarToggle }) => {
  React.useEffect(() => {
    console.log("SIDEEEEEEEEEEEEEEEEEEEEEEE", imagePath);
  }, [imagePath]);

  return (
    <div style={{ width: '345px', height: '100%', backgroundColor: '#f0f0f0', position: 'fixed', top: '0'   , right: '0' }}>
     <div style={{paddingTop:'4px'}}><button onClick={handleSidebarToggle}>Close Sidebar</button></div>
     <Box
      sx={{
        width: '300px',
        height: '200px',
        marginTop: '40px',
        marginLeft: '20px',
        borderRadius: 1,
        overflow: 'hidden', // Ensure the image stays within the box
      }}
    >
      {imagePath && <img src={imagePath} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
    </Box>
     <Box component="section" sx={{  width:320,
         marginTop:'70px',
         marginLeft:'10px',
          height:64,
          borderRadius:1,
          zIndex:4,
          bgcolor: '#F97400',
          '&:hover': {
            bgcolor: '#F97400',
            
          },position: 'relative',
          boxShadow: '0px 24px 19px -17px rgba(0, 0, 0, 0.57)'
          }}>
     
    </Box>
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
          boxShadow: '0px 14px 11px -17px rgba(0, 0, 0, 0.57)'
          }}>
     
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
          boxShadow: '0px 14px 11px -17px rgba(0, 0, 0, 0.57)'
          }}>
     
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
     
    </Box>
    
    </div>
  );
};  

export default Sidebar;
