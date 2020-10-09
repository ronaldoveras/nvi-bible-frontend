import { Link, Typography } from "@material-ui/core";

const Footer = () => {
    return(

      <Typography >
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/ronaldoveras">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
  
    );
  }

export default Footer; 