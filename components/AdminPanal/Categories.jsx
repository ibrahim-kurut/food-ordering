import { useState } from "react"
import Title from "../ui/Title"
import Input from "../Form/Input"
import Btn from "../ui/Btn"


const Categories = () => {
    const [inputText, setInputText] = useState('')
    const [categories, setCategories] = useState(['pizza'])
    return (
        <>
            <Title title="Category"
                addStyle="text-[40px] font-dancing" />
            <div>
                <div className="mt-5 ">
                    <div className="flex gap-4 flex-1 items-center">
                        <Input
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="add a new category..." value={inputText} />
                        <button
                            onClick={() => {
                                setCategories([...categories, inputText]);
                                setInputText("");
                            }}
                            className="bg-primary px-6 py-3 mb-4 rounded-xl">
                            Add
                        </button>

                    </div>
                    <div>
                        {
                            categories.map((category, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center">
                                        <b className="text-xl">{category}</b>
                                        <button
                                            onClick={() =>
                                                setCategories(categories.filter((cat) => cat !== category))
                                            }
                                            className="bg-red-500 px-6 py-3 mb-4 rounded-xl">
                                            delete
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories