import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = ({ counters, setCounters, item, index }) => {
    const handleDecrement = () => {
        const newCounters = [...counters];
        newCounters[index]--;
        // prevents the counter from showing negative numbers
        if (newCounters[index] >= 0) {
            setCounters(newCounters);
        }
    };

    const handleIncrement = () => {
        const newCounters = [...counters];
        newCounters[index]++;
        setCounters(newCounters);
    };

    const handleReset = () => {
        const newCounters = [...counters];
        newCounters[index] = 0;
        setCounters(newCounters);
    };

    return (
        <div className="counter-wrapper">
            <div className="counter-items">
                <FontAwesomeIcon
                    icon="minus"
                    className="minus"
                    size="2x"
                    onClick={handleDecrement}
                >
                    -
                </FontAwesomeIcon>

                <p>{item}</p>

                <FontAwesomeIcon
                    icon="plus"
                    className="plus"
                    size="2x"
                    onClick={handleIncrement}
                >
                    +
                </FontAwesomeIcon>
            </div>

            <div>
                <button className="reset-btn" onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;
