import React from 'react';
import { connect } from 'react-redux';
import { SelectSong } from '../Actions'


const SongList = (props) => {
  
  
    return (
        <div>
           
                        {props.songs.map((song) => {
                            return(
                                <>
                            <div className="card w-50">
                            <div className="card-body">
                             
                              <p className="card-text">{song.title}</p>
                              <button type="button" className="btn btn-info" onClick={()=>props.SelectSong(song)}>Info</button>
                            </div>
                          </div>
                          <br/><br/>
                          </>
                            );
                        })};
                 
        </div>
    )
};

const mystate = state => {
   console.log(state)
    return { songs: state.songs };
}

export default connect(mystate,{ SelectSong })(SongList);