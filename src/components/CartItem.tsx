import { images } from "@/assets/images";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { useData } from "./data";

export default function CartItem() {
    const { counter, showCart, setCounter, setShowCart } = useData();
    return (
        <>
            {showCart && counter > 0 && (
                <div className="flex items-center justify-between w-full gap-4 my-4 ">
                    <img
                        className=" aspect-square rounded-md object-cover max-w-[60px] "
                        src={images.thumb1}
                        alt="thumbnail"
                    />
                    <div>
                        <p>Fall Limited Edition Sneakers</p>
                        <p>
                            $125.00 x {counter}
                            <span className=" font-semibold text-secondary ">
                                {" "}
                                ${125 * counter}.00
                            </span>
                        </p>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className=" text-muted hover:text-foreground "
                        onClick={() => {
                            setCounter(0);
                            setShowCart(false);
                        }}
                    >
                        <Trash2 />
                    </Button>
                </div>
            )}
        </>
    );
}
