import React from "react";
import { Card, CardContent, Avatar, Typography, Button, Box } from "@mui/material";
import { LinkedIn, GitHub, Instagram, Email } from "@mui/icons-material";
import './Profile.css';
const Profile = () => {
  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, rgb(67, 100, 172), #e5e5e5)"
      }}
    >
      <Card 
        sx={{ 
          maxWidth: 400, 
          textAlign: "center", 
          p: 3, 
          borderRadius: 3, 
          boxShadow: 3 ,
          background: "linear-gradient(to bottom,rgb(236, 74, 74),rgb(247, 180, 54))"
        }}
      >
        <Avatar
          src="https://avatars.githubusercontent.com/u/108675322?v=4"
          sx={{ width: 100, height: 100, margin: "auto", mb: 2 }}
        />
        <Typography variant="h5" fontWeight="bold" sx={{ fontStyle: "italic" }}>
            Shiv Jani
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold", fontStyle: "italic" }}>
            Frontend Developer | Cloud Enthusiast | Digital Marketer
        </Typography>

        <CardContent>
            <Typography variant="body1" sx={{ mb: 2, fontWeight: "bold", fontStyle: "italic" }}>
                 Passionate about building beautiful websites and working with modern web technologies.
            </Typography>
          
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<LinkedIn />}
              href="https://www.linkedin.com/in/shiv-jani-56973a26b/" 
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button 
              variant="outlined" 
              color="informal"
              startIcon={<GitHub />} 
              href="https://github.com/Jani-shiv" 
              target="_blank"
            >
              GitHub
            </Button>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button 
              variant="contained" 
              color="secondary" 
              startIcon={<Instagram />}
               href="https://www.instagram.com/jani._.712/" 
              target="_blank"
            >
              Instagram
            </Button>
            <Button 
              variant="outlined" 
              color="danger"
              startIcon={<Email />}
              href="mailto:shivjani2005@gmail.com"
            >
              Email
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
