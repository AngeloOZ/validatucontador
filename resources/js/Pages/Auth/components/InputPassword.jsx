import { useState } from "react";
import { Input } from "@nextui-org/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const InputPassword = ({ ...props }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <Input
            {...props}
            endContent={
                <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                >
                    {isVisible ? <AiFillEyeInvisible size={22} /> : <AiFillEye size={22} />}
                </button>
            }
            type={isVisible ? "text" : "password"}
        />
    );
};
