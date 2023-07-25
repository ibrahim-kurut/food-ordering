import Image from 'next/image'

const Order = () => {
    return (

        <div className="flex justify-between items-center flex-col p-10 min-h-[calc(100vh_-_368px)]">
            <div className=" flex items-center flex-1 overflow-x-auto w-full">
                <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                order id
                            </th>
                            <th scope="col" className="py-3 px-6">
                                customer
                            </th>
                            <th scope="col" className="py-3 px-6">
                                address
                            </th>
                            <th scope="col" className="py-3 px-6">
                                total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary capitalize">
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                                123456789
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                user name
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                address
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                $15
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bg-primary sm:flex justify-between w-full p-10 capitalize ">
                <div className="relative flex flex-col items-center py-3">
                    <Image src="/img/order/payment.png" width={40} height={40} alt='' />
                    <span>payment</span>
                </div>
                <div className="relative flex flex-col items-center py-3 animate-bounce">
                    <Image src="/img/order/preparing.png" width={40} height={40} alt='' />
                    <span>preparing</span>
                </div>
                <div className="relative flex flex-col items-center py-3">
                    <Image src="/img/order/deliver.png" width={40} height={40} alt='' />
                    <span>on the way</span>
                </div>
                <div className="relative flex flex-col items-center py-3">
                    <Image src="/img/order/delivered.png" width={40} height={40} alt='' />
                    <span>delivered</span>
                </div>
            </div>
        </div>

    )
}

export default Order