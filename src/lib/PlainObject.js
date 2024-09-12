export default function PlainObj(obj) {
    try {
        return JSON.parse(JSON.stringify(obj));
    } catch (err) {
        return "Data is not parsed in the PlainObject function"
    }
}