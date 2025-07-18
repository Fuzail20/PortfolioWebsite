import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';

const experienceData = [
  {
    year: 'July 2024 – Present',
    company: 'Blackbuck',
    position: 'Software Development Engineer - 2',
    location: 'Bengaluru, India',
    achievements: [
      'Leading the development of TZF – The Zinka Fastag a fintech product for FASTag issuance, and playing a key role in building the TZF PPI Wallet system , a digital wallet that handles UPI payments , recharges , etc — delivering a fully integrated digital tolling and payment solution.',
      'Architected and implemented the Bharat Bill Payment System (BBPS) microservice as a new business initiative, enabling seamless utility bill payments from a single platform. Owned end-to-end development, including HLD, LLD, and integration, leading to increased revenue for Blackbuck and higher user engagement on the app.',
      'Migrated the AutoRecharge module to a microservice using the Strangler Fig pattern, decoupling it from the Fastag system to improve modularity, scalability, and performance',
      'Implemented circuit breakers to prevent thread pool exhaustion when downstream services became latent or unresponsive. Designed an auto-recovery mechanism to seamlessly restore service availability once the downstream system stabilized, improving system resilience and fault tolerance',
      'Implemented API-level Authorization across five services, preventing unauthorized access and reducing fraud. Ensured users can only retrieve data linked to their id, blocking unauthorized requests and significantly enhancing security.',
      'Mentored junior developers in adopting best coding practices',
    ],
  },
  {
    year: 'July 2022 - June 2024',
    company: 'Blackbuck',
    position: 'Software Development Engineer - 1',
    location: 'Bengaluru, India',
    achievements: [
      'Engineered an event-driven Coupon Code system using Kafka',
      'Architected and developed the User Earnings module with a rule-based engine',
      'Automated report scraping using Selenium',
      'Leveraged Docker for containerization and contributed to Kubernetes deployment',
      'Owned multiple services and handled infra issues',
    ],
  },
  {
    year: 'May 2021 – July 2021',
    company: 'GEP Worldwide',
    position: 'Technology Intern',
    location: 'India',
    achievements: [
      'Created a new tab in the Mass Update portal',
      'Worked on creating Stored Procedures using T-SQL',
    ],
  },
];

const Experience = () => {
  return (
    <Box id="experience" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Work Experience
          </Typography>
          <Timeline position="alternate">
            {experienceData.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <WorkIcon />
                  </TimelineDot>
                  {index !== experienceData.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6" component="h2">
                      {exp.company}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {exp.position}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {exp.year} | {exp.location}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {exp.achievements.map((achievement, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          component="li"
                          sx={{ mb: 1 }}
                        >
                          {achievement}
                        </Typography>
                      ))}
                    </Box>
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

export default Experience; 