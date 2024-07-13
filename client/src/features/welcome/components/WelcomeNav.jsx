import "../styles/welcomeNav.css";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
	{
		name: "Meal Plans",
		href: "#",
		color: "#DC2F02",
		current: true,
	},
	{
		name: "Workouts",
		color: "#E85D04",
		href: "#",
		current: false,
	},
	{
		name: "About Us",
		href: "#",
		color: "#F48C06",
		current: false,
	},
	{
		name: "Log In",
		href: "/login",
		color: "#ffba08",
		current: false,
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function WelcomeNav() {
	return (
		<Disclosure as="nav" className="bg-dark-grey shadow-md" id="nav">
			<div className="mx-auto max-w-7xl">
				<div className="relative flex h-16 items-center justify-between">
					{/* Mobile menu button - only visible on small screens */}
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
							<span className="absolute -inset-0.5" />
							<span className="sr-only">Open main menu</span>
							{/* Icon when menu is closed */}
							<Bars3Icon
								aria-hidden="true"
								className="block h-6 w-6 group-data-[open]:hidden"
							/>
							{/* Icon when menu is open */}
							<XMarkIcon
								aria-hidden="true"
								className="hidden h-6 w-6 group-data-[open]:block"
							/>
						</DisclosureButton>
					</div>

					{/* Logo section - centered on mobile, left-aligned on larger screens */}
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<h1 className="h-10 w-auto text-xl font-bold pt-1" id="logo">
								LvlUp
							</h1>
						</div>
					</div>

					{/* Navigation icons and profile dropdown - right-aligned */}
					<div className="flex items-center">
						{/* Navigation icons - hidden on mobile, visible on larger screens */}
						<div className="hidden sm:block">
							<div className="flex space-x-4">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										aria-current={item.current ? "page" : undefined}
										className=" rounded-md px-3 py-2 text-lg font-bold"
										style={{ color: item.color }} // Use the color from the navigation item
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile menu panel - only visible on small screens */}
			<DisclosurePanel className="sm:hidden">
				<div className="space-y-1 px-2 pb-3 pt-2">
					{navigation.map((item) => (
						<DisclosureButton
							key={item.name}
							as="a"
							href={item.href}
							aria-current={item.current ? "page" : undefined}
							className="block rounded-md px-3 py-2 text-base font-bold w-full text-center"
							style={{ color: item.color }}
						>
							{item.name}
						</DisclosureButton>
					))}
				</div>
			</DisclosurePanel>
		</Disclosure>
	);
}

export default WelcomeNav;
