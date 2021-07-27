import { Code, parse } from '../code'
import { FuncNode, Node } from '../node'

export function Judge(
    src: Code<number>,
    dst: Code<number>,
    max1: Code<number>,
    max2: Code<number>,
    max3: Code<number>
): Node<number>
export function Judge(
    src: Code<number>,
    dst: Code<number>,
    min1: Code<number>,
    max1: Code<number>,
    min2: Code<number>,
    max2: Code<number>,
    min3: Code<number>,
    max3: Code<number>
): Node<number>
export function Judge(
    src: Code<number>,
    dst: Code<number>,
    arg1: Code<number>,
    arg2: Code<number>,
    arg3: Code<number>,
    arg4?: Code<number>,
    arg5?: Code<number>,
    arg6?: Code<number>
): Node<number> {
    if (arg4 !== undefined && arg5 !== undefined && arg6 !== undefined) {
        return new FuncNode('Judge', [
            parse(src),
            parse(dst),
            parse(arg1),
            parse(arg2),
            parse(arg3),
            parse(arg4),
            parse(arg5),
            parse(arg6),
        ])
    } else {
        return new FuncNode('JudgeSimple', [
            parse(src),
            parse(dst),
            parse(arg1),
            parse(arg2),
            parse(arg3),
        ])
    }
}
