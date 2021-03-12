export function lazyEffect(func, milliseconds) {
    let timer = null;
    return _=>{
        clearTimeout(timer);
        timer = setTimeout(_=>{
            timer = null;
            func.apply(this, arguments);
        }, milliseconds);
    };
}
