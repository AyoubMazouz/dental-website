// Context Imports.
import { useNotification } from "../../contexts/NotificationContext"
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
	const { alert, setAlert } = useNotification()
	const types = {
		danger: <DangerIC className="bg-danger text-3xl text-danger-dark" />,
		warning: <WarningIC className="bg-warning text-3xl text-warning-dark" />,
		info: <InfoIC className="bg-info text-3xl text-info-dark" />,
		success: <SuccessIC className="bg-success text-3xl text-success-dark" />,
	}
	return (
		alert && (
			<div className="relative z-20 flex w-full justify-center">
				<div
					className={`bg-${alert[0]} text-${alert[0]}-dark absolute top-[2.2rem] flex w-full max-w-[1840px] items-center justify-between rounded p-4 shadow-md lg:top-[.8rem]`}>
					<div className="flex items-center gap-x-3 font-semibold">
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
