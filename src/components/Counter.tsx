import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useData } from "./data";

export default function Counter() {
    const { counter, setCounter } = useData();
    const handleIncrement = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const handleDecrement = () => {
        setCounter((prevCounter) => prevCounter - 1);
    };
    return (
        <div className=" text-primary font-bold flex items-center gap-6 ">
            <Button
                disabled={counter <= 0}
                variant="ghost"
                size="icon"
                onClick={handleDecrement}
            >
                <Minus />
            </Button>
            <span className=" text-secondary  text-lg ">{counter}</span>
            <Button variant="ghost" size="icon" onClick={handleIncrement}>
                <Plus />
            </Button>
        </div>
    );
}
