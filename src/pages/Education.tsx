import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';

const educationData = [
  {
    year: '2018 - 2022',
    institution: 'National Institute of Technology, Warangal',
    degree: 'Bachelor of Technology in Computer Science',
    details: 'CGPA: 8.01',
  },
  {
    year: '2016 - 2018',
    institution: 'High School',
    degree: 'Higher Secondary Education',
    details: 'Assistant Headboy, Perfect SAT Score (2400/2400) in Maths, Physics & Chemistry',
  },
  {
    year: '2014 - 2016',
    institution: 'Secondary School',
    degree: 'Secondary Education',
    details: 'Perfect Score in Class 10 (CGPA 10.0). Awarded scholarship for academic excellence.',
  }
];

const Education = () => {
  return (
    <Box id="education" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Education
          </Typography>
          <Timeline position="alternate">
            {educationData.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <SchoolIcon />
                  </TimelineDot>
                  {index !== educationData.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6" component="h2">
                      {edu.institution}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {edu.year}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {edu.details}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education; 