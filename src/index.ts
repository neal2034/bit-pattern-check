import {strategies,getStrategyKey} from "./util/stratries";

/**
 * detect the pattern of the name
 * @param name
 */
export function detectPatterns(name: `${string}.bit`): Set<string>{
    let resultSet = new Set<string>()
    const strDetect = name.slice(0, -4)
    const strategyKeys = getStrategyKey(strDetect)
    strategyKeys.forEach(strategy=>{
        strategies[strategy](strDetect).forEach(item=>{
            resultSet.add(item)
        })
    })
    return resultSet
}
