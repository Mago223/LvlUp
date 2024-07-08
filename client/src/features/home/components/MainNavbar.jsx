import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  HomeIcon,
  ChartBarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import "../styles/MainNavbar.css";

const navigation = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/home",
    color: "#DC2F02",
    current: true,
  },
  {
    name: "Leaderboard",
    icon: ChartBarIcon,
    color: "#E85D04",
    href: "/leaderboard",
    current: false,
  },
  {
    name: "Notifications",
    icon: BellIcon,
    href: "/notifications",
    color: "#F48C06",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function lightenColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = ((num >> 8) & 0x00ff) + amt,
    B = (num & 0x0000ff) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

export default function MainNavbar() {
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
                    className="rounded-md px-3 py-2 text-sm font-medium"
                    style={{ color: item.color }} // Use the color from the navigation item
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = lightenColor(
                        item.color,
                        20
                      ))
                    } // Lighten color on hover
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = item.color)
                    } // Return to original color
                  >
                    <item.icon
                      className="h-8 w-8"
                      aria-hidden="true"
                      style={{ color: "inherit" }} // This will make the icon inherit the color from its parent
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Profile dropdown menu */}
            <Menu as="div" className="relative ml-3">
              <div id="userCircle">
                <MenuButton
                  className="relative flex rounded-md p-2 text-sm"
                  style={{ color: "#ffba08" }} // Set the default color
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = lightenColor("#ffba08", 20))
                  } // Lighten on hover
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#ffba08")
                  } // Back to default on leave
                >
                  <span className="sr-only">Open user menu</span>
                  <UserCircleIcon
                    className="h-8 w-8"
                    aria-hidden="true"
                    style={{ color: "inherit" }} // Inherit color from parent
                  />
                </MenuButton>
              </div>
              {/* Dropdown menu items */}
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-input-grey py-1 shadow-md transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-blue-600 data-[focus]:bg-orange-200"
                  >
                    Your Profile
                  </a>
                </MenuItem>

                <MenuItem>
                  {/* change this later to logout component*/}
                  <a
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
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
              className="block rounded-md px-3 py-2 text-base font-medium w-full text-center"
              style={{ color: item.color }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = lightenColor(item.color, 20))
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = item.color)}
            >
              <item.icon className="h-8 w-8 mx-auto mb-1" aria-hidden="true" />
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
