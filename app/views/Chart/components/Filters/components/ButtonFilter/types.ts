import { IconType } from "@types";
import { ReactNode } from "react";

export interface types<T> {
    items: Array<{ title: string, value: T }>,
    title: string,
    icon: IconType,
    onChange: (item: T) => void,
    value?: T
}