export function niceScale(minPoint, maxPoint, maxTicks) {
    const niceNum = (localRange, round) => {
        let exponent, fraction, niceFraction;
        exponent = Math.floor(Math.log10(localRange));
        fraction = localRange / Math.pow(10, exponent);
        if (round) {
            if (fraction < 1.5)
                niceFraction = 1;
            else if (fraction < 3)
                niceFraction = 2;
            else if (fraction < 7)
                niceFraction = 5;
            else
                niceFraction = 10;
        } else {
            if (fraction <= 1)
                niceFraction = 1;
            else if (fraction <= 2)
                niceFraction = 2;
            else if (fraction <= 5)
                niceFraction = 5;
            else
                niceFraction = 10;
        }
        return niceFraction * Math.pow(10, exponent);
    };
    const lst = [];
    const range = niceNum(maxPoint - minPoint, false);
    const stepSize = niceNum(range / (maxTicks - 1), true);
    const lBound = Math.floor(minPoint / stepSize) * stepSize;
    const uBound = Math.ceil(maxPoint / stepSize) * stepSize;
    for (let i = lBound; i <= uBound; i += stepSize) { lst.push(i); }
    return lst;
}
