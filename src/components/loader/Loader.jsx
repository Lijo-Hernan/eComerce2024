import { useState, CSSProperties } from "react";
import { RotatingLines, ThreeCircles, DNA } from 'react-loader-spinner'





const loader = () => {


    return (

        <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            />
)};

export default loader;