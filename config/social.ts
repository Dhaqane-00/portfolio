import { Github, Linkedin, Mail, LucideIcon } from "lucide-react"
import { IconType } from "react-icons";
import { SiWhatsapp } from "react-icons/si";

export type social = {
  name: string;
  icon: LucideIcon | IconType;
  link: string;
}

export const socialProps: social[] = [
  {
    name: 'Github',
    icon: Github,
    link: 'https://github.com/Dhaqane-00'
  },
  {
    name: 'Linkedin',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/abdullahi-mowliid-dhaqane-0921b912a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app '
  },
  {
    name: 'Email',
    icon: Mail,
    link: 'mailto:Abdilaahimowliid@gmail.com'
  },
  {
    name: 'Whatsapp',
    icon: SiWhatsapp,
    link: 'https://api.whatsapp.com/send?phone=252617869750&text=Ol%C3%A1,%20Guilherme!'
  }
]
