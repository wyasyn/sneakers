import { images } from "@/assets/images";
import { links } from "./constant";
import { ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Mobile from "./Mobile";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CartItem from "./CartItem";
import { useData } from "./data";

export default function Header() {
    const { counter, showCart } = useData();
    return (
        <header className=" border-b border-border/30 shadow-sm py-4 md:py-0 ">
            <div className="container flex items-center gap-4 justify-between">
                <div className=" flex items-center gap-6 ">
                    <Mobile />
                    <a href="#">
                        <img src={images.logo} alt="logo" />
                    </a>
                    <ul className=" md:flex gap-4 items-center hidden ">
                        {links.map((item) => (
                            <li key={item}>
                                <a
                                    className=" py-8 border-b-2 border-transparent capitalize hover:border-primary block "
                                    href="#"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=" flex gap-4 items-center relative ">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                size="icon"
                                variant="ghost"
                                className=" relative "
                            >
                                <ShoppingCart />
                                {showCart && counter > 0 && (
                                    <div>
                                        <span className=" absolute -top-2 -right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-bold">
                                            {counter}
                                        </span>
                                    </div>
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel className=" px-4 ">
                                Cart
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <>
                                {showCart && counter > 0 ? (
                                    <div className=" p-4 ">
                                        <DropdownMenuItem>
                                            <CartItem />
                                        </DropdownMenuItem>
                                        <Button
                                            size="sm"
                                            className=" text-white w-full "
                                        >
                                            Checkout
                                        </Button>
                                    </div>
                                ) : (
                                    <div className=" grid place-items-center py-12 px-8 ">
                                        <p>Your cart is empty</p>
                                    </div>
                                )}
                            </>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <div className=" cursor-pointer rounded-full hover:outline outline-primary ">
                        <Avatar>
                            <AvatarImage src={images.avator} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </header>
    );
}
