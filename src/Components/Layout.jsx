import React from 'react';
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
        <header>상단 헤더</header>
        <Outlet />
        <footer>하단 푸터</footer>
		</>
	);
};

export default Layout;