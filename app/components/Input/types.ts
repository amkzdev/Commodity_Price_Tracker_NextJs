import { ReactNode } from "react";

export interface InputFieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    icon?: ReactNode,
    error?: boolean,
    errorText?: string,
    success?:boolean,
    label?: string,
    fullWidth?: boolean,
    fillFlex?: boolean,
    containerClassName?:string,
}