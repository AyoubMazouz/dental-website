// Icons Imports.
import { PhoneIC } from "../../data/icons.data"
// Data Imports.
import { info } from "../../data"
const { image, alt, address, phone, workHours } = info

export default function Details({ setAlert }) {
	return (
		<div className="h-full py-4">
			{/* Image */}
			<img
				src={image}
				alt={alt}
				className="object-cover max-h-[380px] w-full rounded-2xl hidden lg:block"
			/>

			{/* Address */}
			<h3 className="text-light mx-6 mt-2">{address}</h3>
			<div className="w-full gap-8 flex flex-wrap mx-4 text-bluish-gray mt-[2rem]">
				{/* Work Hours */}
				<ul>
					{Object.entries(workHours).map(([day, time], id) => {
						return (
							<div className="grid grid-cols-2 font-semibold">
								<h5 key={id} className="border-b-2 border-secondary my-1">
									{day}
								</h5>
								<h5 key={id} className="border-b-2 border-secondary my-1">
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
							className="border-b-2 border-secondary my-1 flex gap-x-2 cursor-pointer font-semibold">
							<PhoneIC className="text-lg" />
							{number}
						</h5>
					))}
				</div>
			</div>
		</div>
	)
}
