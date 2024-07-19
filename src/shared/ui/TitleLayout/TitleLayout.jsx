import React from 'react';
import cn from "classnames";
import css from "./TitleLayout.module.css";

export const TitleLayout = (props) => {
	
	return (
		<div className={css.root}>
			{props.cate && (
				<span className={cn(css.cate, "text_xl", "text_900")}>{props.cate}</span>
			)}
			<div className={cn(css.title, "text_5xl", "text_900", props.white && css.white)}>
				<h2>{props.title}</h2>
			</div>
			
			{props.bottomSlot}
		</div>
	);
};

