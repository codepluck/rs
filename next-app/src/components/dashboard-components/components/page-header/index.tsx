import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, LineChart, Package, Package2, PanelLeft, ShoppingCart, Users2 } from "lucide-react";
import Link from "next/link";

export default function PageHeader() {
    return (
        <section className="w-full flex">
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
            </div>
        </section>

    )
}