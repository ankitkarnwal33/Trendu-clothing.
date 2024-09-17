import {
  PlaceholderValue,
  OnLoadingComplete,
} from "next/dist/shared/lib/get-img-props";
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
      loader?: import("next/image").ImageLoader | undefined;
      quality?: number | `${number}` | undefined;
      priority?: boolean | undefined;
      loading?: "eager" | "lazy" | undefined;
      placeholder?: PlaceholderValue | undefined;
      blurDataURL?: string | undefined;
      unoptimized?: boolean | undefined;
      overrideSrc?: string | undefined;
      onLoadingComplete?: OnLoadingComplete | undefined;
      layout?: string | undefined;
      objectFit?: string | undefined;
      objectPosition?: string | undefined;
      lazyBoundary?: string | undefined;
      lazyRoot?: string | undefined;
    } & RefAttributes<HTMLImageElement | null>
) {
  return <Image {...props} alt="something" />;
}
