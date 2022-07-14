import { Button,
         Container,
         Fab,
         FormControlLabel,
         FormLabel,
         makeStyles,
         MenuItem,
         Modal, 
         Radio,
         RadioGroup,
         Snackbar,
         TextField, 
         Tooltip } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { useState } from "react";
import MuiAlert from '@material-ui/lab/Alert';
import Alert from "@material-ui/lab/Alert";


const useStyles = makeStyles((theme) => ({
 fab: {
     position: "fixed",
     bottom: 20 ,
     right: 20,
 } ,
 container: {
     width: 500,
     height: 550,
     backgroundColor: "white",
     //top: 50,
     //bottom: 0,
     //left: 0,
     //right: 0,
     //margin: "auto",
     
 },
 form: {
     padding: theme.spacing(4),
 },
 item: {
     marginBottom: theme.spacing(2),
 },
}
));
export const Add = () => {
  const classes= useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return(
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddCircle />
        </Fab>
      </Tooltip>
      <Modal open={open}>
          <Container className={classes.container}>
              <form className={classes.form} autoComplete="off">
                 <div className={classes.item}>
                   <TextField id="standard-basic" label="Title" size="small" style={{width:"100%"}} />
                 </div>
                 <div className={classes.item}>
                   <TextField
                   id="outlined-multiline-static"
                   multiline
                   rows={4}
                   defaultValue="Tell your story"
                   variant="outlined"
                   label="Description"
                   size="small"
                   style={{width:"100%"}}
                   />
                 </div>
                 <div className={classes.item}>
                     <TextField select label="visibility" value="Public">
                       <MenuItem value="Public">Public</MenuItem>
                       <MenuItem value="Private">Private</MenuItem>
                       <MenuItem value="Unlisted">Unlisted</MenuItem>
                     </TextField>
                 </div>
                 <div className={classes.item}>
                  <FormLabel component="legend">Who can comment</FormLabel>
                  <RadioGroup>
                     <FormControlLabel
                        value="Every Body"
                        control={<Radio size="small" />}
                        label="Every Body"
                     />
                     <FormControlLabel
                         value="My Friends"
                         control={<Radio size="small" />}
                         label="My Friends"
                      />
                       <FormControlLabel
                         value="Nobody"
                         control={<Radio size="small"/>}
                         label="Nobody"
                      />
                      <FormControlLabel
                         value="Custom"
                         disabled
                         control={<Radio size="small"/>}
                         label="Custom(Premium)" />
                   </RadioGroup>
                 </div>
                 <div className={classes.item}>
                     <Button 
                        variant="outlined"
                        color="primary"
                        style={{marginRight: 20}}
                        onClick={() => setOpenAlert(true)}
                     >
                         Create
                     </Button>
                     <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => setOpen(false)}
                      >
                        Cancel
                     </Button>
                 </div>
              </form>
          </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <Alert onClose={handleClose} severity="success">
             This is a success message!
        </Alert>
      </Snackbar>
    </>
  )
}
export default Add;