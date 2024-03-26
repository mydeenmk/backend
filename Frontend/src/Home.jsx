import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Typography, TextField,Button } from '@material-ui/core'
import image from './assets/image.jpg'
import { useNavigate } from 'react-router-dom'
import theme from './theme'
import { useState,useContext } from 'react'
import { PostContext } from './PostContext'


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    },
    media: {
        minHeight: 400
    }
}));

function Home() {
    const { addPost } = useContext(PostContext);
    const [postText, setPostText] = useState(''); // postText is defined here
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const classes = useStyles();
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!localStorage.getItem('jwt')) {
            navigate('/signin'); // Redirect to sigin if not authenticated
        }
    }, [navigate]);
    

    const handlePost = () => {
        // // Handle post creation logic here
        // console.log('Posted:', postText);

        // navigate('/profile', { state: { postText } });
        // // Clear the post text after posting
        // setPostText('');
        const newPost = { text: postText};
        addPost(newPost);
        setPostText('')
      };
    
    //   const handleLike = () => {
    //     setLikes(likes + 1);
    //   };
    
    //   const handleComment = () => {
    //     // Handle comment logic here
    //     console.log('Commented');
    //   };
    return (
        <Card className={classes.card}>
            <Typography variant='h6' className={classes.title}>
                Home Page
            </Typography>
            <CardMedia className={classes.media} image={image} title="MERN STACK APPLICATION"></CardMedia>
            <CardContent>
                <Typography variant='body2' component="p">
                  Hi User !
                </Typography>
                <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="post"
          label="Create Post"
          name="post"
          value={postText   }
          onChange={(e) => setPostText(e.target.value)}
        />
        <div className={classes.buttonGroup}>
          <Button variant="outlined" color="primary" onClick={handlePost}>
            Post
          </Button>
          {/* <Button variant="outlined" color="primary" onClick={handleLike}>
            Like ({likes})
          </Button>
          <Button variant="outlined" color="primary" onClick={handleComment}>
            Comment
          </Button> */}
        </div>
            </CardContent>
        </Card>
    )
}

export default Home