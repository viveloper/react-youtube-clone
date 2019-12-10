import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

function VideoItem(props) {
    const {video, onVideoSelect} = props;
    return (
        <Grid item xs={12}>
            <Paper style={{display: 'flex', alignItems:'center', cursor: 'pointer'}} onClick={()=>{onVideoSelect(video)}}>
                <img style={{marginRight:'20px'}} src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    );
}

export default VideoItem;