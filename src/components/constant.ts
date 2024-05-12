import { images } from "@/assets/images";

export const product = {
    title: "fall limited edition sneakers",
    company: "sneaker company",
    description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 125.0,
    original_price: 250.0,
    discount: 50,
    images: [
        {
            image: images.product1,
            thumb: images.thumb1,
        },
        {
            image: images.product2,
            thumb: images.thumb2,
        },
        {
            image: images.product3,
            thumb: images.thumb3,
        },
        {
            image: images.product4,
            thumb: images.thumb4,
        },
    ],
};

export const links = ["collections", "men", "women", "about", "contact"];
