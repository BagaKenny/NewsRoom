import React, {useEffect, useState} from 'react';
import { getNews } from '../Service/getNews';

import './header.css'

const Header = () => {


  return (
    <div style={{minWidth: '100vh', backgroundColor: 'black', display: 'flex', justifyContent: 'center'}}>
    <header>
      
   
      <h1>NewsRoom</h1>
      <hr />
      <hr />
      <nav>
        <ul>
            <li>World</li>
            <li>Business</li>
            <li>Sports</li>
            <li>Divertissement</li>
            <li>Santé</li>
            <li>Technologie</li>
        </ul>
      </nav>
      
     
      </header>
     
    </div>
  )
}

export default Header
