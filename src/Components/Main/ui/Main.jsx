import React from 'react';
import { CenterLayout, FullWidthLayout } from "@/shared/ui";
import { RegisterArea } from "./RegisterArea.jsx";
import { AboutArea } from "./AboutArea.jsx";
import { useScroll } from "@/shared/lib";
import cn from "classnames";

import css from "./Main.module.css";


const InitialArea = () => {
	const { ref: area3Ref, state: isArea3Intersect } = useScroll();
	
	return (
		<div className={css.initArea}>
			<div className={css.bgContainer}>
				<div className={css.area1}>
					<CenterLayout>
						<div className={css.mainTitle}>
							<div className={cn(css.cate, "text_3xl", "text_700")}>
								<div>하나의 팀으로, 함께 동행합니다</div>
							</div>
							<div className={css.titleImage}></div>
						</div>
					</CenterLayout>
				</div>
				<div className={css.area2}>
					<FullWidthLayout>
						<div className={css.cardArea}>
							<div className={css.card}></div>
							<div className={css.card}></div>
							<div className={css.card}></div>
						</div>
					</FullWidthLayout>
				</div>
				<div className={css.scrollDownArea}>
					<div className={css.mouseDown}>
						<span className={css.icon}>
							<i className={"xi-angle-down-min"}></i>
						</span>
						<span className={css.icon}>
							<i className={"xi-angle-down-min"}></i>
						</span>
						<span className={css.icon}>
							<i className={"xi-angle-down-min"}></i>
						</span>
					</div>
					<div className={css.line}></div>
				</div>
			</div>
			<div className={cn(css.area3, isArea3Intersect && css.active)} ref={area3Ref}>
				<CenterLayout>
					<div className={cn(css.titleArea, "text_6xl", "text_800")}>
						<div className={css.title}>
							<h2>Solution<br className={"isMobile"} /> For a Better Life</h2>
							<div className={"text_xg text_400"}>
								<p>우리는 당신의 일상 모든 순간에,<br className={"isMobile"} /> 곁에서 도움을<br /> 줄 수 있는 것들을
									만듭니다.<br className={"isMobile"} /> 사람들의 삶이 즐거울 수 있도록<br /> 도움을 주는
									것이<br className={"isMobile"} /> 우리가 존재하는 이유입니다.</p>
							</div>
						</div>
						<div className={css.arrowImages}>
							<img src={"/images/main/arrow1.png"} className={css.arrow_01} alt={""} />
							<img src={"/images/main/arrow2.png"} className={css.arrow_02} alt={""} />
							<img src={"/images/main/arrow3.png"} className={css.arrow_03} alt={""} />
							<img src={"/images/main/arrow5.png"} className={css.arrow_04} alt={""} />
							<img src={"/images/main/arrow4.png"} className={css.arrow_05} alt={""} />
						</div>
					</div>
				</CenterLayout>
			</div>
		</div>
	
	)
};


export const Main = () => {
	return (
		<section className={css.root}>
			<InitialArea />
			<AboutArea />
			<RegisterArea />
		</section>
	);
};