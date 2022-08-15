// import React
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// import assets
import '@css/main.styl';
import Main from './main/Main';

// import Pages

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Main /> } />
      </Routes>
    </>
  );
}

export default App;