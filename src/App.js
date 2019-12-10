import React, {useState, useEffect} from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail, VideoList } from './components';

import youtube from './api/youbute';



function App(props) {    
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(()=>{
        handleSubmit('javascript');
    }, []);

    const handleSubmit = async (searchTerm) => {        
        const response = await youtube.get('search', { 
            params: {
                part: 'snippet',
                maxResult: 5,
                key: 'AIzaSyCAe0vOxbCKjWHiQXklEc-OZEuZRBgv9pM',
                q: searchTerm,
            }
        });        
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);        
    }    

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    }

    return (
        <Grid container spacing={10} justify="center">
            <Grid item xs={12}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>                        
                        <SearchBar onFormSubmit={handleSubmit} />
                    </Grid>
                    <Grid item xs={8}>                        
                        <VideoDetail video={selectedVideo} />
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default App;