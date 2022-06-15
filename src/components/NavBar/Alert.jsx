// Context Imports.
import { useAlert } from '../../contexts/AlertContext'
// Icons Imports.
import { FaBars } from 'react-icons/fa'

export default function Alert () {
    // Alert Context.
    const { alert, setAlert } = useAlert()
    if (!alert) return null
    const types = {
        danger: 'bg-red-500',
        warning: 'bg-yellow-500',
        inform: 'bg-sky-500',
        success: 'bg-emerald-500',
    }
    return (
        <div className='relative z-20 w-full flex justify-center'>
            <div className={`${types[alert[0]]} ${alert ? 'top-[2.2rem] lg:top-[.8rem]' : 'top-[-12rem]'} w-full max-w-[1840px] absolute py-6 px-4 transition-all duration-1000 flex justify-between rounded-xl`}>
                <div>{alert[1]}</div>
                <FaBars onClick={() => setAlert(false)} className='cursor-pointer' />
            </div>
        </div>
    )
}