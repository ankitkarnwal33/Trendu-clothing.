import { CardObj } from "./filterCards";

export default function PlainObj(obj: CardObj[] | CardObj): CardObj[] {
  return JSON.parse(JSON.stringify(obj));
}
