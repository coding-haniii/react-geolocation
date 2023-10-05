import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

 const SubLayout = () => {

    const [ dataSub, setDataSub ] = useState({ids : 's1'});

    useEffect(() => {
        setDataSub({ids:'s2'});
    }, []);

    return (
      <div className="sublayout">
          <Header value={dataSub} />
          <Outlet />
          <Footer />    
      </div>
    )
}

export default SubLayout;
