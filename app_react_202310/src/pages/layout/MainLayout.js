import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

 const MainLayout = () => {

    const [ dataMain, setDataMain ] = useState({id:'g1'});

    useEffect(() => {
      //fetch('https://jsonplaceholder.typicode.com/posts/1')
      //.then(res => res.json())
      //.then(data => console.log(data))
      setDataMain({id:'g2'});
    }, []);

    return (
      <div className="mainlayout">
          <Header isMain={true} value={dataMain}/>
          <Outlet />
          <Footer />    
      </div>
    )
}

export default MainLayout;
