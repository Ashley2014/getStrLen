export default function getStrLen(str) {
    if (typeof str !== 'string'){
        throw new Error('the param should be string!')
    }
    let realLength = 0;
    let len = str.length;
    let charCode = -1;
    for (let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) {
            realLength += 1;
        } else {
            realLength += 3;
        }
    }
    return realLength;
}
