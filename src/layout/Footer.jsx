import React from 'react'
// import { Github, Linkedin, Twitter, Heart } from "lucide-react";
// import { Github, Linkedin, Twitter, Heart } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
// import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
/*
const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "nikeshwarpandey@gmail.com",
        href: "mailto:nikeshwarpandey@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 9015427166",
        href: "tel:+919015427166",
    },
    {
        icon: MapPin,
        label: "Bengaluru",
        value: "Bengaluru, KA",
        href: "#",
    },
];
*/
const socialLinks = [
    { icon: LuGithub, href: "https://github.com/nikeshwarpandey", label: "Github" },
    { icon: LuLinkedin, href: "https://www.linkedin.com/in/nikeshwar-pandey-27014220/", label: "LinkedIn" },
    { icon: LuTwitter, href: "https://x.com/nikeshwarpandey", label: "X" },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
]

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='py-12 border-t border-border'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
                    {/* Logo & Copyright */}
                </div>
                {/* Social Links */}
                <div className='flex items-center gap-4'>
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all'
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer