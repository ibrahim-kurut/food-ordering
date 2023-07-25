import Image from "next/image"
import Title from "./Title"
import Btn from "./Btn"
import { FaShoppingCart } from "react-icons/fa"

const CampaignsItem = () => {

    return (
        <div className="flex gap-7 justify-around md:justify-start items-center mb-2 bg-secondary rounded-xl md:w-[49%] p-4">
            <div className="relative w-[120px] h-[120px] border-[5px] border-primary rounded-full overflow-hidden ">
                <Image
                    src="/img/o1.jpg"
                    fill
                    className="hover:scale-105 ease-linear duration-150"
                />
            </div>
            <div className="info">
                <h3>
                    <Title
                        addStyle="text-2xl text-white"
                        title="fast food" />
                </h3>
                <h4 className="text-4xl font-dancing text-white my-2">
                    <span>20%</span>
                    <span className="text-lg"> off</span>
                </h4>
                <div className="btn">
                    <Btn
                        btnName="order now"
                        icon={<FaShoppingCart className="text-gray-900" />} >
                    </Btn>
                </div>
            </div>
        </div>
    )
}




const Campaigns = () => {
    return (
        <div className=" my-5 container mx-auto md:flex justify-between">
            <CampaignsItem />
            <CampaignsItem />
        </div>
    )
}

export default Campaigns