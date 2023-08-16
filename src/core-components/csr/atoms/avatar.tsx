import Image from "next/image";
import Link from "next/link";
interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Link href="/auth/login">
      <Image
        className="rounded-full"
        height="30"
        width="30"
        alt="Avatar"
        src={src || "/images/placeholder.jpg"}
      />
    </Link>
  );
};

export default Avatar;
