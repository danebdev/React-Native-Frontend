export function getClout(number) {
    let sigma;
    if (number < 500) {
        sigma = 'alpha';
    }
    if (number > 499 && number < 1000) {
        sigma = 'beta';
    }
    if (number > 999 && number < 1500 || number == 1500 || number > 1500) {
        sigma = 'gamma';
    }
    return sigma;
}
