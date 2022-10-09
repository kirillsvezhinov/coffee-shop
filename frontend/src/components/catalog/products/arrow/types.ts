interface IArrow {
    onMouseOver: () => void;
    onMouseOut: () => void;
    className: string;
    isHover: boolean;
    typeIcon: string;
}

export { IArrow };
