import { MdOutlineAccountCircle, MdAccountBalanceWallet } from "react-icons/md";
import { FaUsers, FaCubes, FaHome } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";

export const ListMenuDashItems = [
    {
        items: [
            {
                title: "Home",
                href: route('login'),
                icon: <FaHome />,
            },
        ],
    },
    {
        title: "Main Menu",
        items: [
            {
                title: "Accounts",
                href: "/accounts",
                icon: <MdOutlineAccountCircle />,
            },
            {
                title: "Payments",
                href: "/payments",
                icon: <MdAccountBalanceWallet />,
            },
            {
                title: "Balances",
                icon: <MdAccountBalanceWallet />,
                subitems: [
                    {
                        title: "Banks Accounts",
                        href: "/banks-accounts",
                    },
                    {
                        title: "Credit Cards",
                        href: "/credit-cards",
                    },
                    {
                        title: "Loans",
                        href: "/loans",
                    }
                ],
            },
            {
                title: "Customers",
                href: "/customers",
                icon: <FaUsers />,
            },
            {
                title: "Products",
                href: "/products",
                icon: <FaCubes />,
            },
            {
                title: "Reports",
                href: "/reports",
                icon: <BsGraphUpArrow />,
            },
        ],
    },
    {
        title: "General",
        items: [
            {
                title: "Developers",
                href: "/settings",
                icon: <MdOutlineAccountCircle />,
            },
            {
                title: "View Test Data",
                href: "/adjustments",
                icon: <MdOutlineAccountCircle />,
            },
            {
                title: "Settings",
                href: "/profile",
                icon: <MdOutlineAccountCircle />,
            },
        ],
    },
    {
        title: "Updates",
        items: [
            {
                title: "Check for Updates",
                href: "/settings",
                icon: <MdOutlineAccountCircle />,
            },
        ],
    }
];
