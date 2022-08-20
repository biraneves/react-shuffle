import _ from "lodash";

export function helperShuffleArray(array) {
    const shuffledArray = _.shuffle(array);

    return shuffledArray;
}