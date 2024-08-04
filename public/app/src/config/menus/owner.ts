import { ArrowRight, Bell, CableCar, ChartScatter, ChevronFirst, Eclipse, File, Laptop, LayoutDashboard, LucideLayoutDashboard, MenuSquareIcon, MonitorDot, PiIcon, Pizza, Settings, SplineIcon, Sun, User2 } from "lucide-react";


const ownerMenus = [
    {
        isHeader: true,
        title: "menu",
    },
    {
        title: "Dashboard",
        href: "/owner/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Events",
        href: "/owner/events",
        icon: PiIcon,
    },
    {
        title: "Customers",
        href: "/owner/customers",
        icon: User2,
    },
    {
        title: "History",
        href: "/owner/history",
        icon: ChartScatter,
    },
    {
        title: "Email Templates",
        href: "/owner/email-templates",
        icon: File,
    },
    {
        title: "Venue",
        href: "/owner/venues",
        icon: CableCar,
    },
    {
        title: "Menu Choices",
        href: "/owner/menu-choices",
        icon: MenuSquareIcon,
    },
    {
        title: "Payments",
        href: "/owner/payments",
        icon: MonitorDot,

    },
    {
        title: "Site Essential",
        href: "/owner/site-essential",
        icon: Settings,

    },
    {
        title: "Marketing",
        href: "/owner/marketing",
        icon: Laptop,

    },
    {
        title: "Newsletters",
        href: "/owner/newsletters",
        icon: Eclipse,

    },
    {
        title: "Email Logs",
        href: "/owner/email-logs",
        icon: Sun

    },
    {
        title: "Manage Roles",
        href: "/owner/manage-roles",
        icon: Pizza

    },
    {
        title: "SEO Tools",
        href: "/owner/seo-tools",
        icon: ChevronFirst

    },
    {
        title: "Notifications",
        href: "/owner/notifications",
        icon: Bell

    },
    {
        title: "Support",
        href: "/owner/support-tickets",
        icon: SplineIcon
    },
    {
        title: "Dispute Resolution",
        href: "/owner/dispute-resolution",
        icon: ArrowRight
    },
];

export default ownerMenus