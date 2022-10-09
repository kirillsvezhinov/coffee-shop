type TCheckboxType = "circle" | "square";

interface ICheckboxCircle {
    title: string;
    type?: TCheckboxType;
    onChange: () => void;
    isDisabled?: boolean;
    isChecked: boolean;
    clr: string;
    labelClr?: string;
}

interface IFakeInput {
    type: TCheckboxType;
}

interface ILabel {
    isDisabled: boolean;
    clr: string;
}

export { ICheckboxCircle, IFakeInput, ILabel };
