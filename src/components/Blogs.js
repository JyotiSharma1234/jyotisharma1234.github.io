import React from "react";
import {
    makeStyles,
    withStyles,
    Typography,
    Box,
    Link,
    Button,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,

} from "@material-ui/core";
import BlogUrls from '../content/BlogUrls'
import OpenInNew from '@material-ui/icons/OpenInNew'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 20,
        marginRight: '10%',
        marginLeft: '10%',
        display: 'inline-block',
    },
    heading:{
        textAlign: 'center',
        fontSize: 32,
        textTransform: 'uppercase',
        marginBottom: 20,
        position: 'relative',
    },
    p: {
        fontFamily: '"Open Sans", sans-serif',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    link:{
        color: 'inherit',
        fontWeight: 'bold',
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    card:{
        width: 280,
        margin: 8,
        height: 300,
        padding: 5,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        borderRadius: 10,
        '&:hover': {
            boxShadow: "0 12px 15px 0 rgba(20, 143, 219, 0.24)",
        },
        '& .MuiCardContent-root': {
            height: 250,
        },
        '& .MuiCardActions-spacing': {
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'ui-sans-serif'
        },
    },
    day: {

    },
    night: {

    },
}));

const Blogs = (props) => {
    const classes = useStyles();
    const { theme } = props;

    const ReadMoreDayButton = withStyles((theme) => ({
        root: {
          color: 'black',
          border: '4px solid black',
          '&:hover': {
            color: 'black',
            border: '4px solid #148fdb',
          },
        },
      }))(Button);
      
    const ReadMoreNightButton = withStyles((theme) => ({
        root: {
          color: 'white',
          border: '4px solid white',
          '&:hover': {
            color: 'white',
            border: '4px solid #148fdb',
          },

        },
      }))(Button);
      
      
    const handleReadMore = () => {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = 'https://medium.com/@sjyoti4321';
        a.target = '_blank'
        document.body.appendChild(a);
        a.click();
    }
    return (
        <Box id="blogs" className={classes.root}>
            <Box className={classes.heading}>
                Blogs
            </Box>
            <Typography variant="body2" className={classes.p} gutterBottom>
                I sometimes writes my technical thoughts and new learning. Have a look...
            </Typography>
            <Box className={classes.wrapper}>
            { BlogUrls.map(function(blog) {
                return (
                    <Card key={blog.index} className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h5">
                                    {blog.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {blog.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions classes={classes.cardAction}>
                            <Typography variant="body2" color="textSecondary">
                                {blog.publishedOn}
                            </Typography>
                            <Link href={blog.url} target='_blank'>
                                <IconButton size="small" color="primary">
                                <OpenInNew/>
                                </IconButton>
                            </Link>
                        </CardActions>
                    </Card>
                )
            })}
            </Box>
            <Box margin='15px'>
                { theme=== 'light' ?
                    <ReadMoreDayButton onClick={handleReadMore}>
                        Read More
                    </ReadMoreDayButton>
                :
                    <ReadMoreNightButton onClick={handleReadMore}>
                        Read More
                    </ReadMoreNightButton>
                }
            </Box>
        </Box>
    );
};

export default Blogs;
