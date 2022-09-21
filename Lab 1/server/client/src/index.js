import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js'
import Cities from './Cities'



ReactDOM.render(
    <ol>
        <Header />
        <Cities />
    </ol>
    ,
    document.getElementById('root')
);
