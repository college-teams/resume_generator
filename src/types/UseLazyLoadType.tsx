import { CSSProperties } from "react";

export interface LazyLoadProps {
    data_src:string,
    src:string,
    alt:string,
    className?:string,
    styles?:CSSProperties
}