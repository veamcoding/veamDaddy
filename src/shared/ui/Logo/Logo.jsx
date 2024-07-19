import React from 'react';
import { Link } from "react-router-dom";
import cn from "classnames";

import css from "./Logo.module.css";

export const Logo = ({ mode = "MainPage" }) => {
	return (
		<h1 className={css.root}>
			<Link to={"/"} className={css.logo}>
				<div className={cn(css.image, mode !== "MainPage" && css.blue)} />
			</Link>
		</h1>
	);
}

