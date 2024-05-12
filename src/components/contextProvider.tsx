import { Dispatch, SetStateAction, createContext, useState } from "react";
import { product } from "./constant";

interface DataContextType {
    selectedImage: string;
    setSelectedImage: Dispatch<SetStateAction<string>>;
    counter: number;
    setCounter: Dispatch<SetStateAction<number>>; // Adjusted type
    showCart: boolean;
    setShowCart: Dispatch<SetStateAction<boolean>>; // Adjusted type
}

export const DataContext = createContext<DataContextType>({
    selectedImage: "",
    setSelectedImage: () => {},
    counter: 0,
    setCounter: () => {},
    showCart: false,
    setShowCart: () => {},
});
export default function DataProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [counter, setCounter] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [selectedImage, setSelectedImage] = useState(product.images[0].thumb);
    const value: DataContextType = {
        selectedImage,
        setSelectedImage,
        counter,
        setCounter,
        showCart,
        setShowCart,
    };
    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
}
