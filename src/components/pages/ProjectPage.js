import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { withStyles } from '@mui/material/styles'

// const useStyles = withStyles({
//   gridList: {
//     width: "100%",
//     height: "auto"
//   },
//   card: {
//     maxWidth: 160,
//     height: "100%"
//   }
// });



export default function ProjectPage({ description, imageUrl, title, repoLink, appLink } ) {

  return (
   
   
    <Grid container /*rowSpacing={10} columnSpacing={3} sx={{ marginLeft: '80px'}} */>
       
      <Grid item xs={6} sm={6} md={4} lg={4} >
     
    <Card >
   
      <CardMedia
        sx={{ height: 300 }} 
        image={imageUrl}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
      <CardActions>
      <a href={repoLink}>
      <IconButton aria-label="submit">
          <GitHubIcon />
        </IconButton>
        </a>
        <a href={appLink}>
      <IconButton aria-label="submit">
          <LinkIcon />
        </IconButton>
        </a>
      </CardActions>
    
     </Card>
    </Grid>
   </Grid>
  
   
  );
}