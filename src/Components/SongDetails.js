import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
    if(!props.song)
    {
        return<div><h4>Select a Song</h4></div>
    }
    
    return (
        <div>
            <h2>Song Detail </h2>
            <h4>title: {props.song.title}</h4>
            <h5>Duration: {props.song.duration}</h5>
                    
        </div>
    )
}

const mystate = state => {
    return { song: state.selectedSong };
}

export default connect(mystate)(SongDetails);