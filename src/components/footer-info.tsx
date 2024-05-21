import { Facebook, Instagram, Linkedin, Twitter } from '@/icons'

const footerLinks = [
  {
    href: 'https://www.instagram.com/mapasolidariors/',
    icon: <Instagram />,
    title: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/company/mapa-solid%C3%A1rio-rs/',
    icon: <Linkedin />,
    title: 'LinkedIn',
  },
  {
    href: 'https://x.com/mapasolidariors',
    icon: <Twitter />,
    title: 'Twitter',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=61559453038970',
    icon: <Facebook />,
    title: 'Facebook',
  },
] as const

const FooterInfo = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Redes sociais</h3>
      <div className="flex h-14 w-full items-center space-x-6">
        {footerLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            title={link.title}
            rel="noopener noreferrer"
            className="flex size-6 items-center justify-center text-green-800"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export { FooterInfo }
