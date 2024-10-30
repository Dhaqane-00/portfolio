import { Home, BookUser, FolderKanban, Laptop, LucideIcon, } from "lucide-react";

export type navigation = {
  name: string;
  icon: LucideIcon;
  href: string;
  variant: string
}

const navigationProps: navigation[] = [
  {
    name: 'Home',
    icon: Home,
    href: '/',
    variant: 'secondary',
  },
  {
    name: 'About',
    icon: BookUser,
    href: '/about',
    variant: 'ghost',
  },
  {
    name: 'Projects',
    icon: FolderKanban,
    href: '/projects',
    variant: 'ghost',
  },
  {
    name: 'Technologies',
    icon: Laptop,
    href: '/technologies',
    variant: 'ghost',
  },
]
export default navigationProps;
