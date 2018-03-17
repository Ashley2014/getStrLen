export default function getStrLen(str) {
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
