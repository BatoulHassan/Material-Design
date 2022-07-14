import {Link, Divider, Avatar, ImageList,ImageListItem, Container, makeStyles, Typography } from "@material-ui/core";
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyles = makeStyles((theme) => ({
  container :{
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight:theme.spacing(2),
  },
}
));
export const Rightbar = () => {
  const classes= useStyles();
  return(
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>Online Friends</Typography>
      <AvatarGroup max={4} style={{marginBottom:20}}>
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>Gallery</Typography>
        <ImageList rowHeight={100} className={classes.imageList} style={{marginBottom:20}} cols={2}>
           <ImageListItem>
            <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="any Photo" />
           </ImageListItem>
           <ImageListItem>
            <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" alt="any Photo" />
           </ImageListItem>
           <ImageListItem>
            <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt="any Photo" />
           </ImageListItem>
           <ImageListItem>
            <img src="https://v4.mui.com/static/images/image-list/honey.jpg" alt="any Photo" />
           </ImageListItem>
           <ImageListItem>
            <img src="https://v4.mui.com/static/images/image-list/vegetables.jpg" alt="any Photo" />
           </ImageListItem>
           <ImageListItem>
            <img src="https://v4.mui.com/static/images/image-list/olive.jpg" alt="any Photo" />
           </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>Categories</Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Divider orientation="vertical" flexItem />
      <Link href="#" className={classes.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
    </Container>
  )
}
export default Rightbar;