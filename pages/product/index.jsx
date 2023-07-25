import Btn from '@/components/ui/Btn'
import Title from '@/components/ui/Title'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '@/redux/cartSlice'
const Index = () => {
    // for testing db yapana kadar
    const foodItem = [
        {
            id: 1,
            name: "pizza",
            price: 10,
            discription: "test discription",
            extraOption: [{ id: 1, name: "extra 1", price: 1 }]
        }
    ]
    const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch()


    const handleAddProduct = () => {
        dispatch(addProductToCart({ ...foodItem[0], extrs, price, quantity: 1 }))
    }




    const itemsExtra = [
        {
            id: 1,
            name: "Extra 1",
            price: 1
        },
        {
            id: 2,
            name: "Extra 2",
            price: 1
        },
        {
            id: 3,
            name: "Extra 3",
            price: 1
        }
    ]
    const [prices, setPrices] = useState([10, 20, 30])
    const [price, setPrice] = useState(prices[0])
    const [size, setSize] = useState(0)
    const [extraItem, setExtraItem] = useState(itemsExtra)
    const [extrs, setExtrs] = useState([]) // cart`a gondermek icin

    // create function Üzerine tıkladığımız görüntünün sizeIndex değerini döndürür.
    const handleSizes = (sizeIndex) => {
        const difference = prices[sizeIndex] - prices[size]
        // console.log(difference);
        setSize(sizeIndex)
        changePrice(difference)
        //console.log(sizeIndex) // sizeIndex = tıkladığımızın index degeri 
        //difference = prices icindeki degerin her birinin arasindaki fark
        //console.log('difference = ' + difference);
        //console.log(price);
    }
    const changePrice = (num) => {
        setPrice(price + num)
    }
    // ========================== Increase price of the check box 
    const handleChange = (e, item) => {
        const checked = e.target.checked
        //console.log(checked) = true or false;
        if (checked) {
            changePrice(item.price)
            setExtrs(extrs.concat(item)) //cart`a gondermek icin
        } else {
            changePrice(-item.price)
            setExtrs(extrs.filter(item => item.id !== item.id)) //cart`a gondermek icin
        }

    }

    /* =============================== detail fiyat hesaplama =============================== */

    console.log(cart);
    return (
        <div className="container mx-auto">
            <div className="h-screen mt-10 flex  flex-wrap items-center justify-center gap-20 mb-44 lg:mb-0">
                <div className="relative  w-[25rem] h-[25rem] md:w-[55%] md:h-[60%]">
                    <Image
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src="/img/pizzaSize.png"
                        alt="" fill priority={true}
                        className="object-contain" />
                </div>
                <div className="capitalize flex-1 flex flex-col items-center text-center">
                    <Title
                        title="good pizza"
                        addStyle="text-6xl font-dancing"
                    />
                    <p className="text-2xl  py-2 text-primary">
                        $<span className="underline">{price}</span>
                    </p>
                    <p className="text-sm italic">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, molestias. Aut iure delectus incidunt repellendus.
                    </p>
                    <div className="mb-10 mt-3">
                        <h4 className="text-xl font-bold ">
                            choose the size
                        </h4>
                        <div className="flex items-center gap-x-10 mt-4">
                            <div
                                onClick={() => handleSizes(0)}
                                className="relative w-10 h-10">
                                <Image src="/img/pizzaSize.png" alt="" fill className="object-contain cursor-pointer transition-all hover:rotate-12" />
                                <span className="absolute text-sm -top-2 -right-8 bg-primary rounded-full px-1">small</span>
                            </div>
                            <div
                                onClick={() => handleSizes(1)}
                                className="relative mx-2 w-16 h-16">
                                <Image src="/img/pizzaSize.png" alt="" fill className="object-contain cursor-pointer transition-all hover:rotate-12" />
                                <span className="absolute text-sm -top-2 -right-8 bg-primary rounded-full px-1">middle</span>
                            </div>
                            <div
                                onClick={() => handleSizes(2)}
                                className="relative w-20 h-20">
                                <Image src="/img/pizzaSize.png" alt="" fill className="object-contain cursor-pointer transition-all hover:rotate-12" />
                                <span className="absolute text-sm -top-2 -right-6 bg-primary rounded-full px-1">large</span>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold mt-3">
                            choose additional ingrediente
                        </h4>
                        <div className="flex gap-x-2 mt-2 ">
                            {
                                extraItem.map((item) => {
                                    return (
                                        <label
                                            key={item.id}
                                            className="flex items-center gap-x-1">
                                            <input
                                                onChange={(e) => handleChange(e, item)}
                                                type="checkbox"
                                                // onChange={(e) => alert(item.id)}
                                                className="w-5 h-5 accent-primary" />
                                            <span className="text-sm font-semibold">{item.name}</span>
                                        </label>
                                    )
                                })
                            }
                        </div>

                        <div className="mt-5">

                            <button
                                onClick={handleAddProduct}
                                className="bg-primary py-2 px-6 rounded-full hover:opacity-70 transition-opacity capitalize flex items-center gap-2"
                            >add to card</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Index