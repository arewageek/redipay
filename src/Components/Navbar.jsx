import React, { useContext } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { TransactionContext } from "../Context/TransactionContext";

export function NavbarDefault() {
const [openNav, setOpenNav] = React.useState(false);

const { connectWallet } = useContext(TransactionContext)

React.useEffect(() => {
    window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
    );
}, []);

const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 nav-items">
        {/* <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
        >
            <Link href="#" className="flex items-center">
            Pages
            </Link>
        </Typography>
        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
        >
            <Link href="#" className="flex items-center">
            Account
            </Link>
        </Typography>
        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
        >
            <Link href="#" className="flex items-center">
            Blocks
            </Link>
        </Typography> */}
    </ul>
);

return (
    <div className="px-[20pt]">
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 shadow-lg bg-slate-900 text-slate-50">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                    RediPay
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <Button onClick={connectWallet} variant="gradient" size="sm" className="hidden lg:inline-block bg-slate-700 text-slate-50 font-semibold hover:bg-slate-800 hover:text-slate-100 hover:shadow-lg transition-all rounded-lg">
                    <span>Connect Wallet</span>
                </Button>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                {openNav ? (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                ) : (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>
                )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                {navList}
                <Button onClick={connectWallet} variant="gradient" size="md" fullWidth className="mb-2 p-3 rounded-xl bg-slate-800 hover:bg-slate-700 shadow-md">
                    <span>Connect Wallet</span>
                </Button>
                </div>
            </MobileNav>
        </Navbar>
    </div>
);
}