import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";

interface Props {
  size?: "small" | "medium" | "large";
}
const AppBrand = ({ size }: Props) => {
  const smallSize = 30;
  const mediumSize = 50;
  const largeSize = 170;

  const SIZE =
    size === "small"
      ? smallSize
      : size === "medium"
      ? mediumSize
      : size === "large"
      ? largeSize
      : smallSize;
  return (
    <Link href="/">
      <LazyLoadImage
        effect="blur"
        style={{ objectFit: "cover", width: SIZE, height: SIZE }}
        src="/assets/newlogo.svg"
        alt="payfam logo"
      />
    </Link>
  );
};

export default AppBrand;
