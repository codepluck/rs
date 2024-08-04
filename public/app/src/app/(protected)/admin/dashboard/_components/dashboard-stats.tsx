"use client"

// import { CupBar, NoteIcon, CheckShape, Spam } from "@/components/svg";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { BarChart, CheckCheck, NotebookIcon, Trash2Icon } from "lucide-react";

const DashboardStats = () => {
    const data = [
        {
            text: "Total Sales",
            total: "42,750.98",
            color: "primary",
            icon: <BarChart className="w-3.5 h-3.5" />
        },
        {
            text: "Today Orders",
            total: "536,23,3",
            color: "warning",
            icon: <NotebookIcon className="w-3.5 h-3.5" />
        },
        {
            text: "Completed Orders",
            total: "234,1",
            color: "success",
            icon: <CheckCheck className="w-3.5 h-3.5" />
        },
        {
            text: "Pending Orders",
            total: "332,34",
            color: "destructive",
            icon: <Trash2Icon className="w-3.5 h-3.5" />
        },
    ];
    return (
        <>
            {data.map((item, index) => (
                <div
                    key={`reports-state-${index}`}
                    className={cn(
                        "flex flex-col gap-1.5 p-4 rounded-sm overflow-hidden bg-primary/10  items-start relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-1 before:h-[2px] before:w-9 before:bg-primary/50 dark:before:bg-primary-foreground before:hidden ",
                        {
                            "bg-primary/40  dark:bg-primary/70": item.color === "primary",
                            "bg-orange-50 dark:bg-orange-500": item.color === "warning",
                            "bg-green-50 dark:bg-green-500": item.color === "success",
                            "bg-red-50 dark:bg-red-500 ": item.color === "destructive",
                        }
                    )}
                >
                    <span
                        className={cn(
                            "h-[95px] w-[95px] rounded-full bg-primary/40 absolute -top-8 -right-8 ring-[20px] ring-primary/30",
                       
                        )}
                    ></span>
                    <span className="mt-3 text-sm text-default-800 dark:text-primary-foreground font-medium capitalize relative z-10">
                        {item.text}
                    </span>
                    <div className="flex items-center gap-1">
                        <span className="text-lg font-semibold text-default-900  dark:text-primary-foreground">{item.total}</span>
                        <Icon icon="heroicons:arrow-trending-up" className={`w-5 h-5 text-${item.color} dark:text-primary-foreground`} />
                    </div>
                </div>
            ))}
        </>
    );
};

export default DashboardStats;