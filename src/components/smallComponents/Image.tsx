import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import {
  JSX,
  DetailedHTMLProps,
  ImgHTMLAttributes,
  RefAttributes,
} from "react";

export default function NextImage(
  props: JSX.IntrinsicAttributes &
    Omit<
      DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
      "height" | "width" | "loading" | "ref" | "alt" | "src" | "srcSet"
    > & {
      src: string | import("next/dist/shared/lib/get-img-props").StaticImport;
      alt: string;
      width?: number | `${number}` | undefined;
      height?: number | `${number}` | undefined;
      fill?: boolean | undefined;
      quality?: number | `${number}` | undefined;
      priority?: boolean | undefined;
      placeholder?: PlaceholderValue | undefined;

      objectFit?: string | undefined;
    } & RefAttributes<HTMLImageElement | null>
) {
  return <Image {...props} alt="something" />;
}
