// Icons Imports.
import { PhoneIC } from "../../data/icons.data"
// Data Imports.
import { info } from "../../data/info.data"
const { image, alt, address, phone, workHours } = info

export default function Details({ setAlert }) {
	return (
		<div className="h-full py-4">
			{/* Image */}
			<img
				src={image}
				alt={alt}
				className="hidden max-h-[380px] w-full rounded-2xl object-cover lg:block"
			/>

			{/* Address */}
			<h3 className="mx-6 mt-2 text-light">{address}</h3>
			<div className="mx-4 mt-[2rem] flex w-full flex-wrap gap-8 text-bluish-gray">
				{/* Work Hours */}
				<ul>
					{Object.entries(workHours).map(([day, time], id) => {
						return (
							<div className="grid grid-cols-2 font-semibold">
								<h5 key={id} className="my-1 border-b-2 border-secondary">
									{day}
								</h5>
								<h5 key={id} className="my-1 border-b-2 border-secondary">
									{time}
								</h5>
							</div>
						)
					})}
				</ul>
				{/* Phone */}
				<div className="space-y-2">
					{phone.map((number, id) => (
						<h5
							key={id}
							onClick={() => {
								navigator.clipboard.writeText(number)
								setAlert([
									"success",
									`Phone number \"${number}\" has been copied to your clipboard.`,
								])
							}}
							className="my-1 flex cursor-pointer gap-x-2 border-b-2 border-secondary font-semibold">
							<PhoneIC className="text-lg" />
							{number}
						</h5>
					))}
				</div>
			</div>
		</div>
	)
}
