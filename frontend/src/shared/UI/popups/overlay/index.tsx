import React, { useEffect, useState } from "react";

import Portal from "../portal";
import { OverlayBc, OverlayStyled } from "./styles";
import { IOverlay } from "./types";

const Overlay: React.FC<IOverlay> = ({ 
    children, 
    selector,
    onClose, 
    isOpened, 
    time = 400 
}) => {
    const [isActiveBc, setIsActiveBc] = useState(false);

    useEffect(() => {
        toggleOverlay();
    }, [isOpened]);

    function toggleOverlay() {
        if (!isOpened) {
            setTimeout(() => {
                setIsActiveBc(false);
                return null;
            }, time);
        } else {
            setIsActiveBc(true);
        }
    }

    return (
        <Portal selector={selector}>
            <OverlayStyled>
                <OverlayBc
                    isActive={isActiveBc}
                    onClick={onClose}
                />
                {children}
            </OverlayStyled>
        </Portal>
    );
};

export default Overlay;
