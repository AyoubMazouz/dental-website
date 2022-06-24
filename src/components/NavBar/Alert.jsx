// Context Imports.
import { useAlert } from "../../contexts/AlertContext"
// Icons Imports.
import {
	SuccessIC,
	DangerIC,
	InfoIC,
	WarningIC,
	CloseIC,
} from "../../data/icons.data"

export default function Alert() {
	// Alert Context.
	const { alert, setAlert } = useAlert()
	const types = {
		danger: <DangerIC className="text-3xl text-danger-dark bg-danger" />,
		warning: <WarningIC className="text-3xl text-warning-dark bg-warning" />,
		info: <InfoIC className="text-3xl text-info-dark bg-info" />,
		success: <SuccessIC className="text-3xl text-success-dark bg-success" />,
	}
	return (
		alert && (
			<div className="relative z-20 w-full flex justify-center">
				<div
					className={`bg-${alert[0]} text-${alert[0]}-dark top-[2.2rem] lg:top-[.8rem] w-full max-w-[1840px] absolute p-4 flex justify-between items-center rounded shadow-md`}>
					<div className="flex gap-x-3 items-center font-semibold">
						{[types[alert[0]], alert[1]]}
					</div>
					<CloseIC
						onClick={() => setAlert(null)}
						className="cursor-pointer text-3xl"
					/>
				</div>
			</div>
		)
	)
}
