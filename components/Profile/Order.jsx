import Title from '../ui/Title'

const Order = () => {
    return (
        <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
            <Title title="my orders" addStyle="text-4xl font-dancing" />
            <div className="overflow-x-auto w-full mt-4">
                <table className="w-full text-sm text-center text-gray-500 ">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                id
                            </th>
                            <th scope="col" className="py-3 px-6">
                                address
                            </th>
                            <th scope="col" className="py-3 px-6">
                                date
                            </th>
                            <th scope="col" className="py-3 px-6">
                                total
                            </th>
                            <th scope="col" className="py-3 px-6">
                                status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary capitalize">
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                                123123..
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                address
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                01-09-2023
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                $20
                            </td>
                            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                preparing
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Order