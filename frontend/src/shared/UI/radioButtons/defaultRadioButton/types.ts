interface IDefaultReadioButton {
    title: string;
    value: string | number;
    name: string;
    onChange: () => void;
    isChecked: boolean;
    isDisabled?: boolean;
    clr: string;
}

interface IFakeInput extends IInput{
    isDisabled: boolean;
    clr: string;
}

interface IInput {
    isChecked: boolean;
}

export { IDefaultReadioButton, IFakeInput, IInput };
