import { Container, Typography, Box, Grid, Card, CardContent, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projectsData = [
  {
    title: 'Bharat Bill Payment System (BBPS)',
    description: 'A microservice for utility bill payments, handling multiple payment methods and real-time status updates.',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL'],
    githubLink: 'https://github.com/fuzailvhora/bbps',
    demoLink: 'https://bbps-demo.com',
  },
  {
    title: 'AutoRecharge Module',
    description: 'Migrated a monolithic module to microservices using the Strangler Fig pattern, improving scalability and maintainability.',
    technologies: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'Kafka'],
    githubLink: 'https://github.com/fuzailvhora/autorecharge',
    demoLink: 'https://autorecharge-demo.com',
  },
  {
    title: 'User Earnings Module',
    description: 'A rule-based engine for dynamic earning plans, supporting multiple business models and real-time calculations.',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'MongoDB'],
    githubLink: 'https://github.com/fuzailvhora/earnings',
    demoLink: 'https://earnings-demo.com',
  },
  {
    title: 'Coupon Code System',
    description: 'An event-driven system for applying discounts, supporting multiple coupon types and validation rules.',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'MySQL'],
    githubLink: 'https://github.com/fuzailvhora/coupons',
    demoLink: 'https://coupons-demo.com',
  },
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Projects
          </Typography>
          <Grid container spacing={4}>
            {projectsData.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        {project.technologies.map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            sx={{ mr: 1, mb: 1 }}
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                          variant="outlined"
                          startIcon={<GitHubIcon />}
                          href={project.githubLink}
                          target="_blank"
                        >
                          GitHub
                        </Button>
                        <Button
                          variant="contained"
                          startIcon={<LaunchIcon />}
                          href={project.demoLink}
                          target="_blank"
                        >
                          Live Demo
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 