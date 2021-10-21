import React, {useState, useEffect} from 'react';


const useStateWithPromise = defaultVal => {
    let [state, setState] = useState({
        value: defaultVal,
        resolve: () => {
        }
    });

    useEffect(
        () => {
            state.resolve(state.value);
        },
        [state]
    );

    return [
        state.value,
        updater => {
            return new Promise(resolve => {
                setState(prevState => {
                    let nextVal = updater;
                    if (typeof updater === "function") {
                        nextVal = updater(prevState.value);
                    }
                    return {
                        value: nextVal,
                        resolve
                    };
                });
            });
        }
    ];
};

export default useStateWithPromise;