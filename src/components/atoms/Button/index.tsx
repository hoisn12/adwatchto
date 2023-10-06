import Label from "../Label";

interface ButtonProps {
    label?: string
    onClick?: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {

    return (
        <div 
            className=""
            onClick={onClick}
        >
            <Label>{label}</Label>
        </div>
    )
}

export default Button;