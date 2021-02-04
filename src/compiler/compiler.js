export function compileAskCTLFormula(dataObjectStates, tasks) {
    let formula = "";
    // TODO: Implement the actual compiling here
    dataObjectStates.forEach((doState) => {
        formula += doState;
    });
    tasks.forEach((task) => (formula += task));
    return formula;
}