import { useMemo, useState } from "react";

// Кастомный хук для управления состоянием hover

const useHover = () => {
    const [isHover, setIsHover] = useState(false);

    const eventHandlers = useMemo(
        () => ({
            onMouseOver() {
                setIsHover(true);
            },
            onMouseOut() {
                setIsHover(false);
            },
        }),
        [],
    );

    return {
        isHover,
        eventHandlers,
    };
};

export default useHover;
