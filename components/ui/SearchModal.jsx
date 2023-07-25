import OutsideClickHandler from 'react-outside-click-handler';
import Title from './Title';
import Image from 'next/image';


const SearchModal = ({ setSearchModalOpen }) => {
    return (
        <div className=" top-16 left-0 w-screen h-screen  after:contetnt-[''] after:w-screen after:h-screen after:bg-gray-900 after:opacity-70 after:absolute after:top-0 after:left-0">
            <OutsideClickHandler onOutsideClick={() => setSearchModalOpen(false)}>

                <div className="absolute z-40 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <div className="bg-gray-600 w-[370px] md:w-[35rem] h-fit rounded-xl py-4 px-6">
                        <Title title="search" />
                        <div className="my-3 flex flex-1 border border-primary py-2 px-5 rounded-xl">
                            <input
                                type="text"
                                placeholder="search ..."
                                className="flex-1 bg-transparent outline-none text-lg capitalize"
                            />
                        </div>
                        <ul>
                            <li className="flex justify-between items-center my-2 hover:bg-gray-700 hover:rounded-2xl px-5 ease-in-out duration-150">
                                <div className="relative rounded-full overflow-hidden">
                                    <Image width={75} height={75} src="/img/o1.jpg" />
                                </div>
                                <span className="text-xl capitalize">good pizza</span>
                                <span className="text-xl">10 $</span>
                            </li>
                            <li className="flex justify-between items-center my-2 hover:bg-gray-700 hover:rounded-2xl px-5 ease-in-out duration-150">
                                <div className="relative rounded-full overflow-hidden">
                                    <Image width={75} height={75} src="/img/o1.jpg" />
                                </div>
                                <span className="text-xl capitalize">good pizza</span>
                                <span className="text-xl">10 $</span>
                            </li>
                            <li className="flex justify-between items-center my-2 hover:bg-gray-700 hover:rounded-2xl px-5 ease-in-out duration-150">
                                <div className="relative rounded-full overflow-hidden">
                                    <Image width={75} height={75} src="/img/o1.jpg" />
                                </div>
                                <span className="text-xl capitalize">good pizza</span>
                                <span className="text-xl">10 $</span>
                            </li>



                        </ul>
                    </div>
                </div>

            </OutsideClickHandler>
        </div>
    )
}

export default SearchModal