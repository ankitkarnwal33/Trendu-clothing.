import { CardObj } from "./filterCards";

export default function PlainObj(obj: Object[]): CardObj[] {
  return JSON.parse(JSON.stringify(obj));
}
