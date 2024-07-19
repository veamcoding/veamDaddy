import React, { useCallback, useEffect, useRef, useState } from 'react';

export const useScroll = () => {
	const [ isIntersecting, setIsIntersecting ] = useState(false);
	const element = useRef(null);
	
	const scrollHandler = useCallback((entries, observer) => {
		
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setIsIntersecting(true);
			} else {
				setIsIntersecting(false);
			}
		})
	}, []);
	
	
	useEffect(() => {
		let observer;
		if (element.current) {
			observer = new IntersectionObserver(scrollHandler, { threshold : [0.5] });
			observer.observe(element.current);
		}
		return () => observer && observer.disconnect();
	}, [scrollHandler]);
	
	
	return {
		ref: element,
		state: isIntersecting
	}
};
