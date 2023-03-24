import './styles/Hero.css'

const Hero = () => {
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
					<input type='text' className='input'
						placeholder='Enter YouTube Link'/>
					<button className='search-button' type='button'>
						<span>SUMMARIZE</span>
					</button>
				</div>

			</div>
		</div>
	)  
}

export default Hero