export function mapArrayToObject(arr) {
    return arr.map(element => {
            return {value: element, text: element.toString()}
        });
}