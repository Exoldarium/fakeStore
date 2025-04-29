'use client';

import { useState } from 'react';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/navbar';

import { Product } from '@/types/product';

interface Props {
  products: Product[];
}

function NavBar({ products }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const normalizeCategory = (category: string) =>
    category.trim().charAt(0).toUpperCase() +
    category.trim().slice(1).toLowerCase();

  const categories = Array.from(
    new Set(products.map((product) => normalizeCategory(product.category))),
  );

  const menuItems = ['Home', 'Cart', ...categories, 'Log In'];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="#" className="font-bold text-inherit">
            Fake Store
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:block">
          <Button as={Link} color="primary" href="#" variant="flat">
            Cart
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export { NavBar };
