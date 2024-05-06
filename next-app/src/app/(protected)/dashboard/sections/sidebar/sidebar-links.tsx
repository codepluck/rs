import { ComponentInstanceIcon, DashboardIcon, PinLeftIcon } from "@radix-ui/react-icons"
import { AppWindow, Box, Circle, Eraser, History, List, MessagesSquare, Settings, Truck, User, Users } from "lucide-react"

  
  export interface NavLink {
    title: string
    label?: string
    href: string
    icon: JSX.Element
  }
  
  export interface SideLink extends NavLink {
    sub?: NavLink[]
  }
  
  export const sidelinks: SideLink[] = [
    {
      title: 'Dashboard',
      label: '',
      href: '/',
      icon: <DashboardIcon size={18} />,
    },
    {
      title: 'Tasks',
      label: '3',
      href: '/tasks',
      icon: <List size={18} />,
    },
    {
      title: 'Chats',
      label: '9',
      href: '/chats',
      icon: <MessagesSquare size={18} />,
    },
    {
      title: 'Apps',
      label: '',
      href: '/apps',
      icon: <AppWindow size={18} />,
    },
    {
      title: 'Authentication',
      label: '',
      href: '',
      icon: <User size={18} />,
      sub: [      ],
    },
    {
      title: 'Users',
      label: '',
      href: '/users',
      icon: <Users size={18} />,
    },
    {
      title: 'Requests',
      label: '10',
      href: '/requests',
      icon: <PinLeftIcon size={18} />,
      sub: [
        {
          title: 'Trucks',
          label: '9',
          href: '/trucks',
          icon: <Truck size={18} />,
        },
        {
          title: 'Cargos',
          label: '',
          href: '/cargos',
          icon: <Box size={18} />,
        },
      ],
    },
    {
      title: 'Analysis',
      label: '',
      href: '/analysis',
      icon: <History size={18} />,
    },
    {
      title: 'Extra Components',
      label: '',
      href: '/extra-components',
      icon: <ComponentInstanceIcon size={18} />,
    },
    {
      title: 'Error Pages',
      label: '',
      href: '',
      icon: <Circle size={18} />,
      sub: [

      ],
    },
    {
      title: 'Settings',
      label: '',
      href: '/settings',
      icon: <Settings size={18} />,
    },
  ]