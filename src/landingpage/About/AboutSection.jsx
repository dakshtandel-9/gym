import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import './AboutSection.css'; // Import the CSS file for styling

const aboutDetails = [
    {
        title: "Welcome to Fitness World",
        description: "At Fitness World, we are committed to providing you with the best fitness experience. Our gym is equipped with state-of-the-art facilities to help you achieve your fitness goals.",
        image: "/media/images/fit1.jpg", // Update with the correct image path
    },
    {
        title: "Our Philosophy",
        description: "We believe in a holistic approach to fitness. Our team of experienced trainers and nutritionists are here to guide you every step of the way.",
        image: "/media/images/fit2.jpg",
    },
    {
        title: "Join Our Community",
        description: "Be a part of our vibrant community. We host various fitness events, workshops, and classes to keep you motivated and engaged.",
        image: "/media/images/fit3.jpg",
    },
    {
        title: "State-of-the-Art Equipment",
        description: "Our gym features the latest fitness equipment, ensuring that you have everything you need for an effective workout.",
        image: "/media/images/fit4.jpg",
    },
    {
        title: "Personalized Training",
        description: "Our certified trainers offer personalized training sessions tailored to your individual needs and fitness levels.",
        image: "/media/images/fit5.jpg",
    },
];

function AboutSection() {
    return (
        <Box sx={{ backgroundColor: 'black', padding: 4 }}>
            <Typography variant="h3" align="center" sx={{ color: '#ff6d01', marginBottom: 4 }}>
                About Us
            </Typography>
            <Grid container spacing={6} className="grid-container">
                {aboutDetails.map((detail, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <div className={`content-item ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}>
                            <div className="image-container">
                                <img src={detail.image} alt={detail.title} className="about-image" />
                            </div>
                            <div className="text-container">
                                <Typography variant="h4" sx={{ color: '#ff6d01', marginBottom: 2 }}>
                                    {detail.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#bdbdbd' }}>
                                    {detail.description}
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default AboutSection;
