export function compileAskCTLFormula(name, dataObjectStates, tasks) {
    let formula = "";

    const mainPage = "Main_Page"

    //TODO: replace with "_" instead of trim or whatever

    const dataObjectFunctions = getDataObjectFunctions(dataObjectStates, mainPage)
    const taskFunctions = getTaskFunctions(tasks, mainPage)

    let evaluateStateFunction = `fun evaluateState n = `

    let idx = 0
    dataObjectFunctions.forEach(dataObjectFunction => {
        if (idx !== 0) evaluateStateFunction += 'andalso '
        idx += 1
        evaluateStateFunction += `${dataObjectFunction.name.trim()}`
        formula += `${dataObjectFunction.formula}\n`
    })

    taskFunctions.forEach(taskFunction => {
        if (idx !== 0) evaluateStateFunction += 'andalso '
        idx += 1
        evaluateStateFunction += `andalso ${taskFunction.name.trim()}`
        formula += `${taskFunction.formula}\n`
    })

    const objective = `Objective = POS(NF("${name.trim()}", evaluateState))`

    const evaluate = 'eval_node Objective <current state>'

    formula += evaluateStateFunction + `\n` + objective + `\n` + evaluate
    return formula;
}

function getDataObjectFunctions(dataObjectStates, mainPage) {
    let functions = []
    dataObjectStates.forEach(dataObjectState => {
        const name = `${dataObjectState.name}Has${dataObjectState.state}`
        const formula = `fun ${name} n =
            (if length (Mark.${mainPage}'${dataObjectState.name.trim()}) <> 0
            then
            (List.exists(fn do => #state(do) = ${dataObjectState.state.trim()}) (Mark.${mainPage}'${dataObjectState.name.trim()}))
            else
            false);\n`
        functions.push({
            name,
            formula
        })
    });
    return functions
}

function getTaskFunctions(tasks) {
    let functions = []
    tasks.forEach(task => {
        const name = `is${task}Enabled`
        const formula = `fun ${name} n = TIsDead([TI.${task.trim()}'${task.trim()} 1], n);\n`
        functions.push({
            name,
            formula
        })
    });
    return functions
}