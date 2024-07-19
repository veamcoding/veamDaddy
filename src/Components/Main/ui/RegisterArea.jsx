import React from 'react';

import { IoCheckmarkCircleOutline, IoCheckmarkCircle } from "react-icons/io5";
import { FullWidthLayout, TitleLayout } from "@/shared/ui/index.js";
import cn from "classnames";

import css from "./RegisterArea.module.css";


export const RegisterArea = () => {
	return (
		<div className={css.registerArea} style={{ backgroundImage: `url("/images/main/main_lastArea_bg.jpeg")` }}>
			<FullWidthLayout>
				<div className={css.area}>
					<div className={css.left}>
						<TitleLayout
							white={true}
							title={<>HY와<br className={css.isDeskTop} /> 함께<br className={"isMobile"} /> 동행할 분을<br className={css.isDeskTop} /> 찾습니다.</>}
						/>
					</div>
					<div className={css.right}>
						<form className={cn(css.form,"text_lg", "text_700")}>
							<label className={css.fieldName}>
								<input placeholder={"성함을 입력해주세요."} className={"text_lg text_700"}/>
							</label>
							<label className={css.fieldPhone}>
								<input type={"tel"} placeholder={"전화번호를 입력해주세요."} className={"text_lg text_700"} />
							</label>
							
							<div className={cn(css.checkArea)}>
								<label htmlFor={"chk1"}>
									<input type={"checkbox"} id={"chk1"} />
									<IoCheckmarkCircleOutline className={css.checkIcon} />
									<IoCheckmarkCircle className={css.checkedIcon} />
									<p>(필수) 개인정보 수집에 동의합니다.</p>
								</label>
								<label className={css.marketing}>
									<input type={"checkbox"} />
									<IoCheckmarkCircleOutline className={css.checkIcon} />
									<IoCheckmarkCircle className={css.checkedIcon} />
									<p>(선택) 마케팅 활용에 동의합니다.</p>
								</label>
							</div>
							
							<button className={cn(css.submit, "text_lg", "text_700")} type={"submit"}>상담신청</button>
						</form>
					</div>
				</div>
			</FullWidthLayout>
		</div>
	);
};
