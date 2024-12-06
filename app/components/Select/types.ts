import { IconType } from "@types";

export interface types<VT> {
    items: Array<{ title: string, value: VT }>,
    value?: VT,
    onSelectAction: (item: VT) => void,
    title?: string,
    icon?: IconType
}