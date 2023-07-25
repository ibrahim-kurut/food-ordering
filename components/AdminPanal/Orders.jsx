import React from 'react'
import Title from '../ui/Title'

const Orders = () => {
    return (
        <>
            <Title title="Orders" addStyle="text-[40px] font-dancing" />

            <div className="overflow-x-auto w-full mt-4">
                <table className="w-full text-sm text-center text-gray-500 ">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                product id
                            </th>
                            <th scope="col" className="py-3 px-6">
                                customer
                            </th>
                            <th scope="col" className="py-3 px-6">
                                total
                            </th>
                            <th scope="col" className="py-3 px-6">
                                payment
                            </th>
                            <th scope="col" className="py-3 px-6">
                                status
                            </th>
                            <th scope="col" className="py-3 px-6">
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" bg-secondary border-gray-700 capitalize text-gray-400">
                            <td className="py-4 px-6 font-medium whitespace-nowrap">
                                46512..
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap">
                                user name
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap">
                                $20
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap">
                                cash
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap">
                                preparing
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap">
                                <button className="btn-primary !bg-green-600 !text-white capitalize px-4 py-2 rounded-2xl">next stage</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Orders