interface IHeader extends IHeaderStyles {
    title: string;
    icon?: string;
}

interface IHeaderStyles {
    color: string;
    backgroundColor: string;
}

export { IHeader, IHeaderStyles };
