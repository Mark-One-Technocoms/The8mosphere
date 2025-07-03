import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Search } from "lucide-react";
import { navItems } from "../constants";
import logo from "../assets/logo/8mosphere-logo.PNG";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false); // State to manage sheet open/close
  // State to manage which collapsible item is open in the mobile sheet
  const [openCollapsible, setOpenCollapsible] = useState(null);

  // Function to toggle collapsible state for a given item name
  const toggleCollapsible = (name) => {
    setOpenCollapsible(openCollapsible === name ? null : name);
  };

  return (
    <nav className="w-full flex justify-between items-center px-10 py-2">
      {/* Logo or Brand Name - Visible on all screens */}
      <div>
        <Link to="/">
          <img className="h-14" src={logo} alt="8mosphere Logo" />
        </Link>
      </div>

      {/* Desktop Navigation - Hide on small screens, show on large screens */}
      <div className="hidden lg:flex">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {/* If items exist, render a dropdown menu otherwise just show the link */}
            {navItems.map(({ name, to, items }) =>
              items && items.length > 0 ? (
                <NavigationMenuItem key={name}>
                  <NavigationMenuTrigger className="text-base font-semibold hover:text-blue-500">
                    {to ? <Link to={to}>{name}</Link> : name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="border border-gray-200 bg-white shadow-lg rounded-lg p-4">
                    {/* If items exist, render a dropdown menu */}
                    <NavigationMenuList className="flex-col items-start space-y-2">
                      {items.map((item) => (
                        <NavigationMenuItem key={item.name}>
                          <NavigationMenuLink
                            asChild
                            className="font-semibold text-gray-700 hover:text-blue-500 transition-colors duration-200"
                          >
                            <Link to={item.to}>{item.name}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={name}>
                  <NavigationMenuLink
                    asChild
                    className="text-base font-semibold hover:text-blue-500 transition-colors duration-200"
                  >
                    <Link to={to}>{name}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation - Show on small, hide on large screens */}
      <div className="lg:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full shadow-md"
            >
              <Menu className="size-6 text-blue-500" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] px-8 py-6 flex flex-col"
          >
            <div className="flex items-start mb-6">
              <img className="h-12" src={logo} alt="8mosphere Logo" />
            </div>

            <nav className="flex flex-col space-y-4">
              {navItems.map(({ name, to, items }) => (
                <div key={name}>
                  {items && items.length > 0 ? (
                    // Collapsible for items with sub-menus
                    <Collapsible
                      open={openCollapsible === name}
                      onOpenChange={() => toggleCollapsible(name)}
                      className="w-full"
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold text-gray-900 hover:text-blue-500 transition-colors duration-200 py-2">
                        {/* If 'to' is defined, link the trigger, otherwise just show name */}
                        {to ? (
                          <Link
                            to={to}
                            onClick={(e) => {
                              // Prevent link navigation if it's meant to be a collapsible trigger
                              if (items && items.length > 0) e.preventDefault();
                              toggleCollapsible(name); // Toggle collapsible
                            }}
                          >
                            {name}
                          </Link>
                        ) : (
                          <span>{name}</span>
                        )}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${
                            openCollapsible === name ? "rotate-180" : ""
                          }`}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-4 flex flex-col space-y-2 border-l pl-2 border-gray-200 overflow-hidden transition-all duration-300 ease-in-out">
                        {items.map((item) => (
                          <SheetClose asChild key={item.name}>
                            <Link
                              to={item.to}
                              className="font-semibold text-gray-700 hover:text-blue-500 transition-colors duration-200 py-1"
                              onClick={() => setIsSheetOpen(false)} // Close sheet on click
                            >
                              {item.name}
                            </Link>
                          </SheetClose>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    // Simple Link for items without sub-menus
                    <SheetClose asChild>
                      <Link
                        to={to}
                        className="text-lg font-semibold text-gray-900 hover:text-blue-500 transition-colors duration-200 py-2"
                        onClick={() => setIsSheetOpen(false)} // Close sheet on click
                      >
                        {name}
                      </Link>
                    </SheetClose>
                  )}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden lg:flex space-x-2">
        <Button
          variant="default"
          size="default"
          className="hover:cursor-pointer"
        >
          Inquire about Membership
        </Button>
        <Button
          variant="outline"
          size="default"
          className="hover:cursor-pointer"
        >
          <Search className="size-5" />
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </nav>
  );
};

export default Header;
