import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box id="home" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              component="img"
              src="/images/profile-photo.jpg"
              alt="Fuzail Vhora"
              sx={{
                width: 250,
                height: 250,
                borderRadius: '50%',
                boxShadow: 3,
                objectFit: 'cover',
                mb: 4,
              }}
            />
          </motion.div>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" component="h1" gutterBottom align="center">
                Hi, I'm Fuzail Vhora
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph align="center">
                Software Development Engineer with expertise in building scalable and robust applications
              </Typography>
              <Box sx={{ my: 2 }}>
                <Typography variant="body1" paragraph align="center">
                  Currently working at Blackbuck as a Software Development Engineer - 2, 
                  where I architect and implement microservices, improve system resilience, 
                  and mentor junior developers.
                </Typography>
                <Typography variant="body1" paragraph align="center">
                  With a strong foundation in Computer Science from NIT Warangal and 
                  hands-on experience in Java, Spring Boot, and cloud technologies, 
                  I'm passionate about creating efficient and maintainable software solutions.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, mt: 4, justifyContent: 'center' }}>
                <IconButton
                  component={Link}
                  href="https://www.linkedin.com/in/fuzail-vhora"
                  target="_blank"
                  color="primary"
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://github.com/fuzailvhora"
                  target="_blank"
                  color="primary"
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton
                  component={Link}
                  href="mailto:fuzailvhora@gmail.com"
                  color="primary"
                >
                  <EmailIcon fontSize="large" />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 