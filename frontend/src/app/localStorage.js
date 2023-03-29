export const loadState = () => {
    try {
        const serialState = sessionStorage.getItem('appState');
        if (serialState === null) {
            return undefined;
        }
        return JSON.parse(serialState);
    } catch (err) {
        return undefined;
    }
};


export const saveState = (state) => {
    try {
        const serialState = JSON.stringify(state);
        sessionStorage.setItem('appState', serialState);
    } catch (err) {
        console.log(err);
    }
};
