import React from 'react';
// import Actions from './Actions';
import SongList from './Components/SongList';
import SongDetails from './Components/SongDetails';

function App() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <SongList />
          </div>
          <div className="col">
            <SongDetails />
          </div>

        </div>

      </div>

    </>
  );
}

export default App;
