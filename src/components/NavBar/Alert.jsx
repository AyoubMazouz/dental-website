// Context Imports.
import { useAlert } from '../../contexts/AlertContext'
// Icons Imports.
import { MdClose, MdDangerous, MdOutlineWarning, MdCheckCircle, MdInfo } from "react-icons/md"

export default function Alert () {
    // Alert Context.
    const { alert, setAlert } = useAlert()
    const types = {
        danger: ['bg-red-500', <MdDangerous className='w-8 h-8'/>],
        warning: ['bg-yellow-500', <MdOutlineWarning className='w-8 h-8'/>],
        info: ['bg-sky-500', <MdInfo className='w-8 h-8'/>],
        success: ['bg-emerald-500', <MdCheckCircle className='w-8 h-8'/>],
    }
    return alert && (
        <div className='relative z-20 w-full flex justify-center'>
            <div className={`${types[alert[0]][0]} top-[2.2rem] lg:top-[.8rem] w-full max-w-[1840px] absolute p-4 lg:px-8 flex text-white justify-between items-center rounded shadow-lg`}>
                <div className="grid place-items-center">
                    {types[alert[0]][1]}
                </div>
                <div className='w-full mx-4'>
                    <p className='capitalize font-semibold'>{alert[0]}</p>
                    <p className='px-4'>{alert[1]}</p>
                </div>
                <MdClose onClick={() => setAlert(null)} className='cursor-pointer w-8 h-8' />
            </div>
        </div>
    )
}