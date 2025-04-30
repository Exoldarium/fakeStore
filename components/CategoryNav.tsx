'use client';

import { Navbar, NavbarContent, NavbarItem, Link } from '@heroui/react';

interface Props {
  categories: string[];
}

function CategoryNav({ categories }: Props) {
  const navItems = [...categories];

  return (
    <Navbar className="hidden sm:flex">
      <NavbarContent
        justify="center"
        className="gap-3 items-center text-center"
      >
        {navItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link color="foreground" href="#" className="hover:text-blue-500">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}

export { CategoryNav };
