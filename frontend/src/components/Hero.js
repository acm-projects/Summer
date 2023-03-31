import './styles/Hero.css'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Hero = () => {
	const [link, useLink] = useState('');
	 
	const navigate = useNavigate();

	function handleSummarize(e) {
		e.preventDefault();
		navigate('/general')
	}

	return (
		<div>
			<div className='gradient'>
					
			</div>
			<div className='container'>
				<div className='title'>
					<div className='text-gradient title1'>Watch Less,</div>
					<div className='title2'>Know More.</div>
					<div className='hero-subtext'>Save time, focus on learning, and enhance your video experience with Summer, an application that provides supplementary material and assistance!</div>
				</div>

				<div className='hero-search'>
					<input type='text' className='input' placeholder='Enter YouTube Link'/>
					<button className='search-button' type='button' onClick={handleSummarize}>
						<span>SUMMARIZE</span>
					</button>
				</div>
			</div>
		</div>
	)  
}

export default Hero