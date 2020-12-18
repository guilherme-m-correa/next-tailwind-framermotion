import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4 items-center ">
      <Image src="/img/logo.svg" alt="Logo" width={140} height={32} />

      <nav className="hidden md:block space-x-8">
      <Link href="/next">
      <a className="tracking-wide hover:text-gray-400">Next.js</a>
      </Link>
      <Link href="/tailwind">
      <a className="tracking-wide hover:text-gray-400">Tailwind</a>
      </Link>
      <Link href="/framer-motion">
      <a className="tracking-wide hover:text-gray-400">Framer Motion</a>
      </Link>
      </nav>
    </header>)
}

export default Header;