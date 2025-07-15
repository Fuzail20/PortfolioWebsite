import { Container, Typography, Box, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';
import Grid from '@mui/material/Grid';

const codingProfiles = [
  {
    platform: 'LeetCode',
    username: 'Fuzail20',
    rating: '1800+',
    problemsSolved: '250+',
    link: 'https://leetcode.com/u/Fuzail20/',
    achievements: [
      'Solved 250+ problems across various categories',
      'Strong in Data Structures and Algorithms',
    ],
  },
  // {
  //   platform: 'CodeChef',
  //   username: 'fuzailvhora',
  //   rating: '4 Star',
  //   problemsSolved: '150+',
  //   link: 'https://www.codechef.com/users/fuzailvhora',
  //   achievements: [
  //     '4 Star Coder',
  //     'Participated in multiple coding contests',
  //     'Strong problem-solving skills',
  //   ],
  // },
  {
    platform: 'HackerRank',
    username: 'fuzailvhora',
    rating: '5 Star',
    problemsSolved: '100+',
    link: 'https://www.hackerrank.com/fuzailvhora',
    achievements: [
      '5 Star in Problem Solving',
      'Certified in Data Structures',
    ],
  },
];

const CodingProfile = () => {
  return (
    <Box id="coding-profile" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Coding Profiles
          </Typography>
          <Grid container spacing={4}>
            {codingProfiles.map((profile, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CodeIcon sx={{ mr: 1 }} />
                        <Typography variant="h5" component="h2">
                          {profile.platform}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        Username: {profile.username}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <StarIcon sx={{ color: 'gold', mr: 1 }} />
                        <Typography variant="body1">
                          Rating: {profile.rating}
                        </Typography>
                      </Box>
                      <Typography variant="body1" paragraph>
                        Problems Solved: {profile.problemsSolved}
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                        {profile.achievements.map((achievement, idx) => (
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
                      <Button
                        variant="contained"
                        href={profile.link}
                        target="_blank"
                        fullWidth
                      >
                        View Profile
                      </Button>
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

export default CodingProfile; 