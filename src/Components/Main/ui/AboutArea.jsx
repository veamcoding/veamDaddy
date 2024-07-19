import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FullWidthLayout, TitleLayout } from "@/shared/ui/index.js";
import cn from "classnames";

import css from "./AboutArea.module.css";

const DATA_CARD = [
	{
		id: 1,
		title: "한 발 빠른 시장분석",
		description: "전문 시장분석 시스템을 통해 급변하는 시장속에서 확실한 시장정보를 신속하게 수집하고 분석합니다",
		active: true,
		url: "/images/main/about_card_01.png"
	},
	{
		id: 2,
		title: "회원과의 맞춤형 소통",
		description: "회원과 우선적으로 소통하며, 성향에 따라 현재 시장 상황에 맞춰 누구 쉽게 대응할 수 있는 솔루션을 제공합니다",
		active: false,
		url: "/images/main/about_card_01.png"
	},
	{
		id: 3,
		title: "체계적인 과정",
		description: "투자자로써 발전할 수 있게 교육과정 및 1:1맞춤형 플랜을 제공합니다 (무료 주식 강의 및 온라인 유튜브 강의 제공)",
		active: false,
		url: "/images/main/about_card_01.png"
	},
	{
		id: 4,
		title: "지속적인 수익목표",
		description: "단 한번의 수익이 아닌 안전하고 지속적인 수익을 목표로 투자의 지속가능성 경험시켜 드립니다",
		active: false,
		url: "/images/main/about_card_01.png"
	},
	{
		id: 5,
		title: `수익을 넘어 복리의 마법`,
		description: "누구나 경제적 자유를 추구하지만, 아무나 그 자유를 이룰 수는 없습니다. 복리의 구조로 보이지 않던 새로운 인사이트를 보여드립니다",
		active: false,
		url: "/images/main/about_card_01.png"
	},
];


export const AboutArea = () => {
	const [ activeCardId, setActiveCardId ] = useState(1);
	
	return (
		<div className={css.aboutArea}>
			<FullWidthLayout>
				<div className={css.area}>
					<div className={css.left}>
						<TitleLayout
							cate={"기업소개"}
							title={<>HY의<br className={css.linebreak} /> 새로운 플랜</>}
							bottomSlot={
								<Link to={"/"} className={cn(css.link, "text_900")}>
									<div>
										<p>더보기</p>
										<IoIosArrowForward className={css.icon} />
									</div>
								</Link>
							}
						/>
					</div>
					<div className={css.right}>
						{DATA_CARD.map((item) => (
							<div
								key={item.id}
								className={cn(css.card, item.id === activeCardId && css.active)}
								onMouseEnter={() => setActiveCardId(item.id)}
							>
								<div className={cn(css.cardTitle, "text_xl", "text_900")}>{item.title}</div>
								<div className={css.cardImage}>
									<img src={item.url} alt="" />
								</div>
								<div className={css.cardOverlay}></div>
								<div className={css.cardContents}>
									<div className={css.inner}>
										<div className={cn(css.contentTitle, "text_3xl", "text_900")}>{item.title}</div>
										<div className={cn(css.contentBody, "text_lg", "text_500")}>
											{item.description}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</FullWidthLayout>
		</div>
	);
};
