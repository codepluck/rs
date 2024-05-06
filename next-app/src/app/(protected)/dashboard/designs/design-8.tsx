import Link from "next/link"
import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import DashboardSidebar from "../../../../components/dashboard-components/components/sidebar"
import DashboardHeader from "../../../../components/dashboard-components/components/header"
import PageHeader from "../../../../components/dashboard-components/components/page-header"
import { LayoutBody } from "../../../../components/dashboard-components/components/layout"

export const description =
    "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action."

export const iframeHeight = "800px"

export const containerClassName = "w-full h-full"

export default function Dashboard() {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <DashboardSidebar />
            <div className="flex flex-col">
                <DashboardHeader />
                {/* ===== Main ===== */}
                <LayoutBody className='space-y-4'>
                    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                        <PageHeader />
                        <div
                            x-chunk="An empty state showing no products with a heading, description and a call to action to add a product."
                            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
                        >
                            <div className="flex flex-col items-center gap-1 text-center">
                                <h3 className="text-2xl font-bold tracking-tight">
                                    You have no products
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    You can start selling as soon as you add a product.
                                </p>
                                <Button className="mt-4">Add Product</Button>
                            </div>
                        </div>
                    </main>
                </LayoutBody>

            </div>
        </div>
    )
}
