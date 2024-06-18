import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/logooftheapplication.png"
      alt="logo"
      width={10}
      height={10}
      layout="responsive"
      loading="lazy"
      className="rounded-full"
    />
  );
};
