import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const Navbar = () => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Coding Profile', id: 'coding-profile' },
  ];

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Fuzail Vhora
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              color="inherit"
              onClick={() => handleClick(item.id)}
            >
              {item.name}
            </Button>
          ))}
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DownloadIcon />}
            href="https://drive.google.com/file/d/1L9AclERyKgtkc4OOziY1CTwuylfPjpgG/view?usp=sharing"
            target="_blank"
            sx={{ ml: 2 }}
          >
            Resume
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 