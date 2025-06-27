import { headers } from "next/headers"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

function Header(props: { title: string }) {
    return (
    <div>
        <h1>{props.title}</h1>
    </div>
    )
}

export default Header;