import { product } from "./constant";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import Counter from "./Counter";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Box from "./Box";
import { useData } from "./data";

export default function Hero() {
    const { setShowCart, currentIndex, setCurrentIndex } = useData();

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };
    return (
        <section className=" py-8 lg:py-[7rem] container ">
            <div className=" grid gap-[3rem] lg:grid-cols-2 lg:gap-[5rem] max-w-[500px] lg:max-w-[900px] mx-auto ">
                <div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className=" cursor-pointer ">
                                {product.images.map((item, index) => (
                                    <div
                                        key={index}
                                        className={
                                            index === currentIndex
                                                ? "slide active"
                                                : "hidden"
                                        }
                                    >
                                        <img
                                            className=" object-cover rounded-xl "
                                            src={item.thumb}
                                            alt={item.thumb}
                                        />
                                    </div>
                                ))}
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <Box />
                        </DialogContent>
                    </Dialog>

                    <div className=" flex gap-[2rem] mt-[2.5rem] ">
                        {product.images.map((item, idx) => (
                            <div
                                key={idx}
                                className={` ${
                                    idx === currentIndex &&
                                    "border-2 border-primary"
                                } cursor-pointer rounded-lg overflow-hidden bg-accent`}
                                onClick={() => {
                                    goToSlide(idx);
                                }}
                            >
                                <img
                                    className={`${
                                        idx === currentIndex && "opacity-50"
                                    } rounded-md object-cover w-full h-full `}
                                    src={item.image}
                                    alt="image"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className=" lg:py-[3rem] ">
                    <p className=" text-primary uppercase text-xs font-semibold mb-3 ">
                        {product.company}
                    </p>
                    <h1 className=" text-secondary font-bold capitalize text-5xl  ">
                        {product.title}
                    </h1>
                    <p className=" my-7 max-w-[50ch] ">{product.description}</p>
                    <div className=" mb-8 ">
                        <div className=" flex items-center ">
                            <span className=" text-secondary font-bold text-2xl ">
                                ${product.price}.00
                            </span>
                            <span className=" text-primary bg-primary/40 py-1 px-2 rounded-md ml-4 text-xs font-bold ">
                                {product.discount}%
                            </span>
                        </div>
                        <div className=" text-muted line-through ">
                            ${product.original_price}.00
                        </div>
                    </div>
                    <div className=" flex items-center gap-8 justify-between ">
                        <Counter />

                        <div>
                            <Button
                                size="sm"
                                className=" text-white w-full md:w-[200px] "
                                onClick={() => setShowCart(true)}
                            >
                                <ShoppingCart className=" mr-4 w-5 h-5 " /> Add
                                to cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
