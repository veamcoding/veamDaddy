import React from 'react';
import { Routes, Route } from "react-router-dom";
import Company from "./Components/Company.jsx";
import Layout from "./Components/Layout.jsx";
import { MainPage } from "./pages/main/index.js";


const Router = () => {
	return (
		<Routes>
			<Route path={"/"} element={<Layout />}>
				<Route index={true} element={<MainPage />}/>
				<Route path={"/company"} element={<Company />}/>
			</Route>
		</Routes>
	);
};

export default Router;