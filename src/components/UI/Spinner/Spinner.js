import React from 'react';
import classes from "./Spinner.module.css";

const Spinner = () => {
    return (
        <div className={classes.spinner}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                style={
                    {
                        margin: "auto",
                        background: "none",
                        display: "block",
                        shapeRendering: "auto"
                    }
                }
                width="128px"
                height="128px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid">
                <circle
                    cx="50"
                    cy="50"
                    r="0"
                    fill="none"
                    stroke="#dcf836"
                    strokeWidth="5">
                    <animate
                        attributeName="r"
                        repeatCount="indefinite"
                        dur="1.25s"
                        values="0;42"
                        keyTimes="0;1"
                        keySplines="0 0.2 0.8 1"
                        calcMode="spline"
                        begin="0s">
                    </animate>
                    <animate
                        attributeName="opacity"
                        repeatCount="indefinite"
                        dur="1.25s"
                        values="1;0"
                        keyTimes="0;1"
                        keySplines="0.2 0 0.8 1"
                        calcMode="spline"
                        begin="0s">
                    </animate>
                </circle>
                <circle
                    cx="50"
                    cy="50"
                    r="0"
                    fill="none"
                    stroke="#dd003f"
                    strokeWidth="5">
                    <animate
                        attributeName="r"
                        repeatCount="indefinite"
                        dur="1.25s"
                        values="0;42"
                        keyTimes="0;1"
                        keySplines="0 0.2 0.8 1"
                        calcMode="spline"
                        begin="-0.625s">
                    </animate>
                    <animate
                        attributeName="opacity"
                        repeatCount="indefinite"
                        dur="1.25s"
                        values="1;0"
                        keyTimes="0;1"
                        keySplines="0.2 0 0.8 1"
                        calcMode="spline"
                        begin="-0.625s">
                    </animate>
                </circle>
            </svg>
        </div>
    );
};

export default Spinner;