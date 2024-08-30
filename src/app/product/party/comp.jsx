import { usePathname } from "next/navigation";

export default function CheckUrl() {
  const path = usePathname();
  console.log(path);
  return <h1>hello </h1>;
}
