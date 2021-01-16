import "./App.css";
import React, { useState } from "react";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faPlus,
    faMinus,
    faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faMinus, faStopwatch);

const App = () => {
    const [counters, setCounters] = useState([0]);

    return (
        <>
            <Header />
            <main className="app-wrapper">
                <section>
                    <button
                        className="add-btn"
                        onClick={() => {
                            // if condition is verified : displays a new counter at each click (must not exceed 3)
                            if (counters.length < 3) {
                                // create a copy of 'counters'
                                const newCounters = [...counters];
                                // modify the copy
                                newCounters.push(0);
                                setCounters(newCounters);
                            }
                        }}
                    >
                        Add Counter
                    </button>
                </section>

                <section>
                    {
                        // map() returns as many counters as there are elements in 'counters' array
                        counters.map((item, index) => {
                            return (
                                <Counter
                                    key={index}
                                    item={item}
                                    index={index}
                                    counters={counters}
                                    setCounters={setCounters}
                                />
                            );
                        })
                    }
                </section>
            </main>
            <Footer />
        </>
    );
};

export default App;
