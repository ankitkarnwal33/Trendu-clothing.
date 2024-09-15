import { usePathname } from "next/navigation";

export default function CheckUrl() {
  const path = usePathname();
  return <h1>hello </h1>;
}
