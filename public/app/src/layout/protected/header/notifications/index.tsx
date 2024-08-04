// "use client"

// // import { Bell } from "@/components/svg";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import Link from "next/link";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { cn } from "@/lib/utils";
// import shortImage from "@/public/images/all-img/short-image-2.png";
// import { notifications as data } from "./data";
// import { Bell } from "lucide-react";
// import { useEffect, useState } from "react";
// import NotificationService from "@/services/api/notifications";

// export default function Notifications() {
//     const [notifications, setNotifications] = useState([]);
//     useEffect(() => {
//         const fetchNotifications = async () => {
//             try {
//                 // const response = await axios.get('/api/notifications');
//                 // setNotifications(response.data);
//                 const response = await NotificationService.fetchAllNotifications();
//                 console.log(response, ' response');

//                 // setNotifications(response.data);
//             } catch (error) {
//                 console.error('Error fetching notifications:', error);
//             }
//         };

//         fetchNotifications();
//     }, []);
//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//                 <Button
//                     variant="ghost"
//                     size="icon"
//                     className="relative md:h-9 md:w-9 h-8 w-8 hover:bg-default-100 dark:hover:bg-default-200 
//           data-[state=open]:bg-default-100  dark:data-[state=open]:bg-default-200 
//            hover:text-primary text-default-500 dark:text-default-800  rounded-full  "
//                 >
//                     <Bell className="h-5 w-5 " />
//                     <Badge className=" w-4 h-4 p-0 text-xs  font-medium  items-center justify-center absolute left-[calc(100%-18px)] bottom-[calc(100%-16px)] ring-2 ring-primary-foreground">
//                         5
//                     </Badge>
//                 </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent
//                 align="end"
//                 className=" z-[999] mx-4 lg:w-[412px] p-0"
//             >
//                 <DropdownMenuLabel
//                     style={{ backgroundImage: `url(${shortImage.src})` }}
//                     className="w-full h-full bg-cover bg-no-repeat p-4 flex items-center"
//                 >
//                     <span className="text-base font-semibold text-white flex-1">
//                         Notification
//                     </span>
//                     <span className="text-xs font-medium text-white flex-0 cursor-pointer hover:underline hover:decoration-default-100 dark:decoration-default-900">
//                         Mark all as read{" "}
//                     </span>
//                 </DropdownMenuLabel>
//                 <div className="h-[300px] xl:h-[350px]">
//                     <ScrollArea className="h-full">
//                         {data.map((item, index) => (
//                             <DropdownMenuItem
//                                 key={`inbox-${index}`}
//                                 className="flex gap-9 py-2 px-4 cursor-pointer dark:hover:bg-background"
//                             >
//                                 <div className="flex-1 flex items-center gap-2">
//                                     <Avatar className="h-10 w-10 rounded">
//                                         <AvatarImage src={item.avatar.src} />
//                                         <AvatarFallback>SN</AvatarFallback>
//                                     </Avatar>
//                                     <div>
//                                         <div className="text-sm font-medium text-default-900 mb-[2px] whitespace-nowrap">
//                                             {item.fullName}
//                                         </div>
//                                         <div className="text-xs text-default-900 truncate max-w-[100px] lg:max-w-[185px]">
//                                             {" "}
//                                             {item.message}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div
//                                     className={cn(
//                                         "text-xs font-medium text-default-900 whitespace-nowrap",
//                                         {
//                                             "text-default-600": !item.unreadmessage,
//                                         }
//                                     )}
//                                 >
//                                     {item.date}
//                                 </div>
//                                 <div
//                                     className={cn("w-2 h-2 rounded-full mr-2", {
//                                         "bg-primary": !item.unreadmessage,
//                                     })}
//                                 ></div>
//                             </DropdownMenuItem>
//                         ))}
//                     </ScrollArea>
//                 </div>
//                 <DropdownMenuSeparator />
//                 <div className="m-4 mt-5">
//                     <Button asChild className="w-full">
//                         <Link href="/dashboard">View All</Link>
//                     </Button>
//                 </div>
//             </DropdownMenuContent>
//         </DropdownMenu>
//     );
// };


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BellIcon, EyeNoneIcon, PersonIcon } from "@radix-ui/react-icons"
import { Badge, Bell, Check, CheckCheck } from "lucide-react"
import { notifications } from "./data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"



export function Notifications() {
    return (
        <>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative md:h-9 md:w-9 h-8 w-8 hover:bg-default-100 dark:hover:bg-default-200 
          data-[state=open]:bg-default-100  dark:data-[state=open]:bg-default-200 
           hover:text-primary text-default-500 dark:text-default-800  rounded-full  "
                    >
                        <Bell className="h-5 w-5 " />
                        <Badge className=" w-4 h-4 p-0 text-xs  font-medium  items-center justify-center absolute left-[calc(100%-18px)] bottom-[calc(100%-16px)] ring-2 ring-primary-foreground">
                            5
                        </Badge>
                    </Button>

                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    className=" z-[999] mx-4 lg:w-[412px] p-0"
                >

                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-base">Notifications</CardTitle>
                            <CardDescription>
                                Mark all as read{" "}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-1">
                            <div className="h-[300px] xl:h-[350px]">
                                <ScrollArea className="h-full">
                                    {notifications.length && notifications.map((notification) => {
                                        return (
                                            <Link
                                                key={notification?.id}
                                                href={""}
                                                className="-mx-2 p-4 items-center flex items-s space-x-4 rounded-md transition-all hover:bg-accent hover:text-accent-foreground">
                                                {/* {notification?.avatar && (
                                                    <Avatar className="h-10 w-10 rounded">
                                                        <AvatarImage src={notification.avatar} />
                                                        <AvatarFallback>SN</AvatarFallback>
                                                    </Avatar>
                                                )} */}
                                                <BellIcon className="mt-px h-5 w-5" />
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium leading-none">
                                                        {notification?.fullName}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {notification?.message.substring(0, 70)}
                                                    </p>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </ScrollArea>
                            </div>
                        </CardContent>
                        <CardFooter className="">
                            <Button className="flex items-center justify-center w-full">
                                <CheckCheck className="h-4 w-4" />
                                <span>Mark All Notifications</span>
                            </Button>
                        </CardFooter>
                    </Card>

                </DropdownMenuContent>
            </DropdownMenu>


        </>

    )
}