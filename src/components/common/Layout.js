import React, { useEffect, useRef } from 'react';

//비구조할당으로 children props으로 해당 컴포넌트로 감싼 자식 컨텐츠를 통으로 불러올수 있음
function Layout(props) {
	let frame = useRef(null);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<div className='back'></div>
			<div className='inner'>
				{}
				<h1>{props.name}</h1>
				{props.children}
			</div>
		</section>
	);
}
export default Layout;
