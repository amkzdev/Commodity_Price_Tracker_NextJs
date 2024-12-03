import { create } from 'zustand'

interface DataType {
    step: number,
    email?: string
}

interface StoreType extends DataType {
    setStep: (step: number) => void,
    email?:string,
    dispatch:(data:DataType)=>void
}
export const useSignUp = create<StoreType>((set) => ({
    step: 1,
    setStep: (step) => set((state) => ({ step })),
    dispatch: (newData) => set((state) => ({ ...state , ...newData })),
}))

