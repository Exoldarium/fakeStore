'use client';

import { Navbar, NavbarContent, NavbarItem, Link } from '@heroui/react';

interface Props {
  categories: string[];
}

function CategoryNav({ categories }: Props) {
  const navItems = [...categories];

  return (
    <Navbar>
      <NavbarContent
        justify="center"
        className="hidden sm:flex gap-3 items-center text-center"
      >
        {navItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link color="foreground" href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}

export { CategoryNav };
