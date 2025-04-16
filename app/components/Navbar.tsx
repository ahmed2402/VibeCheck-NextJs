"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useMobile } from "../hooks/use-mobile";

const navigationItems = [
  {
    title: "Features",
    href: "/features",
    children: [
      {
        title: "Feature 1",
        href: "/features/feature-1",
        description: "Description for feature 1",
      },
      {
        title: "Feature 2",
        href: "/features/feature-2",
        description: "Description for feature 2",
      },
      {
        title: "Feature 3",
        href: "/features/feature-3",
        description: "Description for feature 3",
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const isMobile = useMobile();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 flex justify-center pl-6 md:pl-0 z-50 w-full bg-transparent backdrop-blur supports-[backdrop-filter]:bg-background/10">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl text-background md:text-foreground font-bold">
            VibeCheck
          </span>
        </Link>

        {isMobile ? (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-background md:hidden"
              >
                <Menu className="h-8 w-8" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] p-4 bg-background"
            >
              <nav className="flex flex-col gap-4 pt-10">
                {navigationItems.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <Link
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.children && (
                      <div className="ml-4 flex flex-col gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className={cn(
                              "text-lg transition-colors hover:text-primary",
                              pathname === child.href
                                ? "text-primary"
                                : "text-muted-foreground"
                            )}
                            onClick={() => setOpen(false)}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 flex flex-col gap-2">
                  <Button asChild>
                    <Link href="/login" onClick={() => setOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/signup" onClick={() => setOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.children.map((child) => (
                            <ListItem
                              key={child.title}
                              title={child.title}
                              href={child.href}
                              className="cursor-pointer"
                            >
                              {child.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          pathname === item.href && "text-primary"
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}

        <div className="hidden md:flex md:items-center md:gap-2">
          <Button variant="ghost" className="text-background text-lg" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-foreground hover:bg-foreground/80">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
