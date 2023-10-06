import { ReactNode } from "react";

interface LabelProps {
    children?: ReactNode
}

const Label = ({ children }: LabelProps) => {

    return (
        <p className="">{children}</p>
    )
}

export default Label;