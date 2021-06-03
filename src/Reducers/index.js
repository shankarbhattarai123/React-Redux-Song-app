import { combineReducers } from 'redux';


const songsReducer=()=>
{
    return [
        {title:'No scrubs',duration:'3:40'},
        {title:'Macarena',duration:'2:30'},
        {title:'All Star',duration:'3:15'},
        {title:'I want it That Way',duration:'1:45'}
    ];
};
const SelectdSongReducer=(selectedsong=null,action)=>
{
    if(action.type==='SONG_SELECTED')
    {
        return action.payload;
    }
    return selectedsong;
};

export default combineReducers({
    songs:songsReducer,
    selectedSong:SelectdSongReducer
});