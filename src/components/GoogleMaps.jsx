const GoogleMaps = ({ location }) => {
	return (
		<div className="w-full h-full max-w-[2500px]">
			<iframe
				className="w-full h-full"
				loading="lazy"
				allowfullscreen
				referrerpolicy="no-referrer-when-downgrade"
				src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDKbBArDacDk5serVzGPim9D9A-zRLEOMA&q=Space+Needle,Seattle+WA"></iframe>
		</div>
	)
}

export default GoogleMaps
