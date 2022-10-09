import { ReactNode } from "react";

interface IOverlay {
    children: ReactNode;
    selector: string;
    onClose: () => void;
    isOpened: boolean;
    time?: number;
}

interface IOverlayBc {
    isActive: boolean;
}

export { IOverlay, IOverlayBc };
