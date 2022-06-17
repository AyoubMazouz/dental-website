import { Link } from 'react-router-dom'

export default function Logo() {
	return (
		<Link to='/' className='text-lg text-slate-700 capitalize' >
			dental
			<span className="font-semibold text-sky-500">
				Care
			</span>
		</Link>
	)
}
