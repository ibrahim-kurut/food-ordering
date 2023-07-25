import Image from 'next/image'
import Title from '../ui/Title'

const Products = () => {
    return (
        <>
            <Title title="products" addStyle="text-[40px] font-dancing" />
            <div className="overflow-x-auto w-full mt-4">
                <table className="w-full text-sm text-center text-gray-500 ">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                image
                            </th>
                            <th scope="col" className="py-3 px-6">
                                id
                            </th>
                            <th scope="col" className="py-3 px-6">
                                title
                            </th>
                            <th scope="col" className="py-3 px-6">
                                price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" bg-secondary border-gray-700 capitalize text-gray-400">
                            <td className="py-4 px-6 font-medium whitespace-nowrap flex items-center gap-x-1 justify-center">
                                <div className="relative">
                                    <Image src="/img/o1.jpg"
                                        width={60} height={60} alt=''
                                        className="rounded-full" />
                                </div>
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap">
                                12345...
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap">
                                hamburger
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap">
                                $20
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap">
                                <button className="btn-primary !bg-red-600 !text-white capitalize px-4 py-2 rounded-2xl hover:!bg-red-800 transition-all">delete </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Products