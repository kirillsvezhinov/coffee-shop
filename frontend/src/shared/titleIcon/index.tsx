import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import { ITitleIcon } from "./types";

const TitleIcon: React.FC<ITitleIcon> = ({ 
    children, 
    title, 
    type, 
    href, 
    click, 
    ...props 
}) => {
    const components = {
        button: (
            <button onClick={click ?? null}>
                {children}
                <p>{title}</p>
            </button>
        ),
        link: (
            <a
                href={href ?? "#"}
                onClick={click ?? null}
            >
                {children}
                <p>{title}</p>
            </a>
        ),
        routerLink: (
            <Link
                to={href ?? "#"}
                onClick={click ?? null}
            >
                {children}
                <p>{title}</p>
            </Link>
        ),
    };

    return (
        <Container {...props}>
            {type ? (
                components[type]
            ) : (
                <div
                    onClick={click}
                >
                    {children}
                    <p>{title}</p>
                </div>
            )}
        </Container>
    );
};

export default TitleIcon;
