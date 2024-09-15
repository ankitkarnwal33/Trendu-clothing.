export default function PlainObj(obj: Object): Object[] {
  return JSON.parse(JSON.stringify(obj));
}
