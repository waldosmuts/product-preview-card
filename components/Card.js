import Image from "next/image"
import { useEffect, useState } from "react"

export default function Card() {
    const [screenWidth, setScreenWidth] = useState(null)

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        setScreenWidth(window.innerWidth)
    }, [])

    return (
        <div className="bg-white rounded-lg overflow-hidden flex flex-col lg:grid lg:grid-cols-2 w-full max-w-[600px]">
            <Image
                src={screenWidth > 768 ? "/image-product-desktop.jpg" : "/image-product-mobile.jpg"}
                width={screenWidth > 768 ? "600px" : "686px"}
                height={screenWidth > 768 ? "900px" : "480px"}
                className="align-middle"
                priority
            />
            <div className="flex flex-col h-full px-6 pt-4 pb-6 lg:px-8 lg:p-8">
                <h2 className="text-neutral-gray-blue uppercase font-montserrat text-xs tracking-[0.3rem]">Perfume</h2>
                <h1 className="text-3xl font-fraunces mt-2 lg:mt-4 lg:leading-8 text-neutral-dark-blue">Gabrielle Essence Eau De Parfum</h1>
                <p className="text-[13px] lg:text-sm text-neutral-gray-blue font-montserrat mt-4 lg:mt-6 leading-[1.35rem]">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <div className="flex items-center gap-x-6 mt-12 lg:mt-11">
                    <h3 className="font-fraunces text-3xl text-primary-cyan">$149.99</h3>
                    <span className="font-montserrat text-xs line-through text-neutral-gray-blue">$169.99</span>
                </div>
                <button className="bg-primary-cyan hover:bg-primary-dark-cyan text-white w-full rounded-md py-[14px] font-montserrat text-sm font-bold flex items-center justify-center mt-3 lg:mt-auto gap-x-3"><Image src="/icon-cart.svg" width="15px" height="16px" />Add to Cart</button>
            </div>
        </div>
    )
}