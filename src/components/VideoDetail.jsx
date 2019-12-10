import React from 'react';

import { Paper, Typography } from '@material-ui/core';

function VideoDetail(props) {
    const { video } = props;
    if (video) {
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        console.log(videoSrc);

        return (
            <React.Fragment>
                <Paper elevation={6} style={{ height: '70%' }}>
                    <iframe src={videoSrc} frameBorder="0" height="100%" width="100%" title="Video Player"></iframe>
                </Paper>
                <Paper elevation={6} style={{ padding: '15px' }}>
                    <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Paper>
            </React.Fragment>
        );

    }
    else {
        return <div>Loading...</div>
    }
}

export default VideoDetail;