import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
 media: {
     height: 250,
     [theme.breakpoints.down("sm")]: {
       height: 150,
       },
 },
 card: {
     marginBottom: theme.spacing(5),
 },
}
));
const Post = () => {
  const classes= useStyles();
  return(
   <Card className={classes.card}>
       <CardActionArea>
           <CardMedia className={classes.media}
            image="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            title= "My Post"
           />
            <CardContent>
                <Typography gutterBottom variant="h5">My First Post</Typography>
                <Typography variant="body2">
                  In publishing and graphic design,
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without
                  In publishing and graphic design,
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without
                  In publishing and graphic design,
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without
                </Typography>
            </CardContent>    
       </CardActionArea>
       <CardActions>
           <Button size="small" color="primary">Share</Button>
           <Button size="small" color="primary">Learn More</Button>
       </CardActions>
   </Card>
  )
}
export default Post;