
import { UserCircleIcon } from "@heroicons/react/16/solid";

type IconType = typeof UserCircleIcon


export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    size?: 'xlarge' | 'large' | 'medium' | 'fit',
    variant?: 'primary' | 'suceess' | 'error' | 'yellow' | 'disabled' ,
    // fill?: 'outlined' | 'filled'
    fullWidth?: boolean,
    fillFlex?: boolean,
    leftIcon?: IconType,
    rightIcon?: IconType,
    iconSide?: 'right' | 'left',
    loading?: boolean,
    leftIconColor?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>['className'],
    rightIconColor?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>['className'],
}