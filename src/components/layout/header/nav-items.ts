export const navItems = [
  {
    type: 'link',
    href: '/',
    label: 'Home',
  },
  {
    type: 'dropdown',
    label: 'Who We Are',
    items: [
      { href: '/about', label: 'About Us' },
      { href: '/leadership', label: 'Our Leadership' },
      { href: '/companies', label: 'Our Companies' },
      { href: '/services', label: 'Our Services' },
      { href: '/clientele', label: 'Our Clientele' },
    ],
  },
  {
    type: 'link',
    href: '/gallery',
    label: 'Gallery',
  },
  {
    type: 'link',
    href: '/career',
    label: 'Career',
  },
  {
    type: 'link',
    href: '/sustainability',
    label: 'Sustainability',
  },
  {
    type: 'link',
    href: '/terms',
    label: 'Terms & Conditions',
  },
  {
    type: 'link',
    href: '/faq',
    label: 'FAQ',
  },
] satisfies NavItem[];

type NavItem = Record<string, string | unknown> &
  (
    | {
        type: 'link';
        href: string;
      }
    | {
        type: 'dropdown';
      }
  );
