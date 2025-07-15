import { Container, Typography, Box, LinearProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', rating: 90 },
      { name: 'Python', rating: 80 },
      { name: 'C/C++', rating: 75 },
      { name: 'SQL', rating: 85 },
      { name: 'Linux', rating: 80 },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'Spring Framework', rating: 90 },
      { name: 'Spring Boot', rating: 90 },
      { name: 'Spring MVC', rating: 85 },
      { name: 'Spring Data', rating: 85 },
      { name: 'Hibernate', rating: 80 },
    ],
  },
  {
    category: 'Developer Tools',
    skills: [
      { name: 'Kafka', rating: 85 },
      { name: 'Kubernetes', rating: 80 },
      { name: 'Docker', rating: 85 },
      { name: 'AWS', rating: 80 },
      { name: 'Google Cloud Platform', rating: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Technical Skills
          </Typography>
          <Grid container spacing={4}>
            {skillsData.map((category, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Typography variant="h5" gutterBottom>
                    {category.category}
                  </Typography>
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex} sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 0.5,
                        }}
                      >
                        <Typography variant="body1">{skill.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.rating}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.rating}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 