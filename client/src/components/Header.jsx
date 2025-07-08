import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
import { Input } from "@/components/ui/input";
import { Menu, ChevronDown, Search, XIcon } from "lucide-react";
import { navItems } from "../constants";
import logo from "../assets/logo/8mosphere-logo.PNG";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false); // State to manage sheet open/close
  // State to manage which collapsible item is open in the mobile sheet
  const [openCollapsible, setOpenCollapsible] = useState(null);

  // State to manage search visibility and value
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Function to toggle collapsible state for a given item name
  const toggleCollapsible = (name) => {
    setOpenCollapsible(openCollapsible === name ? null : name);
  };

  // State to track if user has scrolled down
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Effect to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow" : ""
      }`}
    >
      <nav className="max-w-[96rem] mx-auto flex justify-between items-center px-4 sm:px-6 md:px-10 py-2">
        {/* Logo or Brand Name - Visible on all screens */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              className="h-10 sm:h-12 md:h-14"
              src={logo}
              alt="8mosphere Logo"
            />
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
                    <NavigationMenuTrigger
                      className={`2xl:text-base xl:text-sm bg-transparent hover:bg-transparent font-semibold ${
                        scrolled ? "text-gray-900" : "text-white"
                      } ${
                        [
                          "/about",
                          "/membership/request-access",
                          "/services",
                        ].includes(location.pathname)
                          ? "text-gray-900"
                          : ""
                      }`}
                    >
                      {to ? <Link to={to}>{name}</Link> : name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="border border-gray-200 bg-white shadow-lg rounded-lg p-4">
                      {/* If items exist, render a dropdown menu */}
                      <NavigationMenuList className="flex-col items-start space-y-2">
                        {items.map((item) => (
                          <NavigationMenuItem key={item.name}>
                            <NavigationMenuLink
                              asChild
                              className="font-semibold text-gray-700 transition-colors duration-200"
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
                      className={`text-base text-white font-semibold transition-colors duration-200 ${
                        scrolled ? "text-gray-900" : "text-white"
                      } ${
                        [
                          "/about",
                          "/membership/request-access",
                          "/services",
                        ].includes(location.pathname)
                          ? "text-gray-900"
                          : ""
                      }`}
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
                className="h-10 w-10 rounded-full border-none"
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
                                if (items && items.length > 0)
                                  e.preventDefault();
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

        <div className="hidden lg:flex flex-col items-end space-y-2 relative">
          <div className="flex space-x-2">
            <Link to="/membership/request-access">
              <Button variant="default" size="default" className="">
                Inquire about Membership
              </Button>
            </Link>
            <Button
              variant="outline"
              size="default"
              className={`relative ${
                scrolled ? "" : "border-white text-white"
              } ${
                location.pathname !== "/"
                  ? "text-gray-900 border-gray-900 hover:border-gray-500 hover:text-gray-500"
                  : ""
              }`}
              onClick={() => setShowSearch((prev) => !prev)}
            >
              {showSearch ? (
                <XIcon className="size-5" />
              ) : (
                <Search className="size-5" />
              )}
            </Button>
          </div>
          {showSearch && (
            <Input
              type="text"
              placeholder="Search..."
              value={searchValue}
              className="text-white absolute top-12"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
