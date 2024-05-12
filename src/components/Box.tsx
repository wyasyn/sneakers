import { product } from "./constant";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useData } from "./data";

export default function Box() {
    const { selectedImage, setSelectedImage } = useData();
    const handleNext = () => {
        const currentIndex = product.images.findIndex(
            (img) => img.thumb === selectedImage
        );
        const nextIndex = (currentIndex + 1) % product.images.length;
        setSelectedImage(product.images[nextIndex].thumb);
    };

    const handlePrevious = () => {
        const currentIndex = product.images.findIndex(
            (img) => img.thumb === selectedImage
        );
        const previousIndex =
            (currentIndex - 1 + product.images.length) % product.images.length;
        setSelectedImage(product.images[previousIndex].thumb);
    };
    return (
        <div>
            <div>
                <div className=" cursor-pointer relative ">
                    <div
                        className=" absolute -left-3  text-black bg-background rounded-full aspect-square p-1 top-1/2 -translate-y-1/2 hover:text-primary "
                        onClick={handlePrevious}
                    >
                        <ChevronLeft />
                    </div>
                    <div
                        className=" absolute -right-3 text-black bg-background rounded-full aspect-square p-1 top-1/2 -translate-y-1/2 hover:text-primary "
                        onClick={handleNext}
                    >
                        <ChevronRight />
                    </div>
                    <img
                        className=" rounded-xl object-cover "
                        src={selectedImage}
                        alt="image"
                    />
                </div>
                <div className=" flex gap-[2rem] mt-[2.5rem] ">
                    {product.images.map((item, idx) => (
                        <div
                            key={idx}
                            className={` ${
                                selectedImage === item.thumb &&
                                "border-2 border-primary"
                            } cursor-pointer rounded-lg overflow-hidden bg-accent`}
                            onClick={() => setSelectedImage(item.thumb)}
                        >
                            <img
                                className={`${
                                    selectedImage === item.thumb && "opacity-50"
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
