import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { IPortal } from "./types";

const Portal: React.FC<IPortal> = ({ children, selector }) => {
    const [container] = useState(() => document.createElement("div"));

    useEffect(() => {
        document.querySelector(selector).appendChild(container);

        return () => {
            document.querySelector(selector).removeChild(container);
        };
    }, []);

    return ReactDOM.createPortal(children, container);
};

export default Portal;
