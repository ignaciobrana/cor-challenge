import * as fs from 'fs';

const getChainCircle = (input: string[]): string[] => {
    const result: string[] = [];

    //since chain is a circle any point can be the start point of the chain.
    //We make input[0] as start point
    result.push(input[0]);

    const used: boolean[] = [];

    const isPossibleToChain: boolean = formCircle(input, result, used, input[0][0]);

    return !isPossibleToChain ? [] : result;
}

//we keep track of first char of the chain and the end compare that with last char of last element of the chain
const formCircle = (input: string[], result: string[], used: boolean[], firstChar: string): boolean => {
    if (input.length == result.length) {
        const lastString: string = result[result.length - 1];
        return firstChar == lastString[lastString.length - 1];
    }

    const lastString: string = result[result.length - 1];
    const lastChar: string = lastString[lastString.length - 1];

    for (let i = 1; i < input.length; i++) {
        if (used[i])
            continue;

        if (lastChar == input[i][0]) {
            used[i] = true;
            result.push(input[i]);

            const isPossibleToChain: boolean = formCircle(input, result, used, firstChar);
            if (isPossibleToChain)
                return true;

            used[i] = false;
            result.pop();
        }
    }
    return false;
}

const writeResultInFile = (text: string) => {
    fs.writeFile("./result.txt", text, err => {
        if (err)
            return console.log(`There was an error writing in file: ${err}`);
        console.log("The file was saved!");
    });
}

/************************************************************************************/
const chainInput: string[] = ['height', 'racket', 'chair', 'touch', 'tunic'];

const chainResult: string[] = getChainCircle(chainInput);

const resultText = !chainResult.length ? "Not able to form a chain" : chainResult.join('\n');

writeResultInFile(resultText);