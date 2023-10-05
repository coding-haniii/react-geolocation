import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// 레이아웃
import MainLayout from './layout/MainLayout'
import SubLayout from './layout/SubLayout'

// 페이지
import Detail from './detail/Detail'
import Main from './main/Main'
import MapBox from './map/Map'
import NaviArrow from './map/Navi'
import Search from './search/Search'

function CommonRouter() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate replace to="/main" />} />
        {/*<Route index element={<LoginPage />} />*/}
        <Route path="/main" element={<Main />} />
        <Route path="/map" element={<MapBox />} />
        <Route path="/navi" element={<NaviArrow />} />
      </Route>
      <Route element={<SubLayout />}>
        <Route path="/search" element={<Search />} />
        <Route path=":detail" element={<Detail />} />
      </Route>

      {/*<Route component={NotFound} />*/}
    </Routes>
  )
}

export default CommonRouter;