import { product } from "./constant";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useData } from "./data";

export default function Box() {
    const { currentIndex, setCurrentIndex } = useData();
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };
    return (
        <div>
            <div>
                <div className=" cursor-pointer relative ">
                    <div
                        className=" absolute -left-3  text-black bg-background rounded-full aspect-square p-1 top-1/2 -translate-y-1/2 hover:text-primary "
                        onClick={goToPrevSlide}
                    >
                        <ChevronLeft />
                    </div>
                    <div
                        className=" absolute -right-3 text-black bg-background rounded-full aspect-square p-1 top-1/2 -translate-y-1/2 hover:text-primary "
                        onClick={goToNextSlide}
                    >
                        <ChevronRight />
                    </div>
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
                </div>
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
        </div>
    );
}
