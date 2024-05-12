import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { links } from "./constant";

export default function Mobile() {
    return (
        <div className=" md:hidden ">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <ul className=" flex flex-col gap-4 mt-4 ">
                        {links.map((item) => (
                            <li key={item}>
                                <a
                                    className=" font-semibold capitalize text-secondary "
                                    href="#"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </SheetContent>
            </Sheet>
        </div>
    );
}
