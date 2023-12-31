import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/landing/footer';
import SignInBox from '@/components/auth/signInBox';
import Logo from '@/assets/morandi-logos/blackMorandiLogo.svg';

export default function SingIn() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <Link href="/">
          <Image
            src={Logo}
            width={330}
            height={245}
            alt={'로고'}
            className="mr-[0.5rem]"
          />
        </Link>
        <div className="my-[2rem]">
          <SignInBox />
        </div>
        <div className="mb-[2rem] text-gray-500">
          아직 모랜디 회원이 아니신가요?
        </div>
        <Link href="signup" className="text-[1.2rem]">
          회원가입
        </Link>
      </div>
      <Footer />
    </>
  );
}
