import React from 'react';
import './Header.css';

 const Header = ({value}) => {
  return (
    <header className="header">
        <div>
                <div><h2>header {value.id}</h2></div>
        </div>
    
    </header>
  )
}

export default  Header;