import Image from 'next/image'
import React from 'react'

const CustomerItem = ({ srcImg }) => {
    return (
        <div className="mt-5 mx-4">
            <div className="content p-6 bg-secondary text-white rounded-[5px]">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia odio architecto natus! In, iure. Commodi.
                </p>
                <h6 className="text-lg font-semibold pt-3">
                    moana michell
                </h6>
                <p>magna aliqua</p>

            </div>
            <div className="img relative w-28 h-28 mt-8 top-arrow">
                <Image src={srcImg}
                    className="rounded-full border-4 border-primary"
                    alt="" fill />
            </div>
        </div>
    )
}

export default CustomerItem