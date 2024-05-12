import Image from 'next/image';
import { FC } from 'react';

const SocialLogins: FC = () => {
  return (
    <>
      <div className="text-center text-xs text-gray-500">or Signup with</div>
      <div className="flex gap-4">
        <button className=" mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-gray-600/30 py-2">
          <Image src="/fb.png" alt="facebook" width={40} height={40} />
          <span>Facebook</span>
        </button>
        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-gray-600/30 py-2">
          <Image src="/google.png" alt="google" width={40} height={40} />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;
