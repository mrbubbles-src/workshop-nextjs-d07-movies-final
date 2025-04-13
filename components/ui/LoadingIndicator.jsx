'use client';

import Image from 'next/image';
import pikachu from '@/public/images/loading.gif';

const LoadingIndicator = () => {
  return (
    <div className="relative h-32 overflow-hidden">
      <div className="animate-move-pikachu absolute top-1/2 -translate-y-1/2">
        <Image
          src={pikachu}
          alt="Loading..."
          width={100}
          height={100}
          priority
        />
      </div>
    </div>
  );
};

export default LoadingIndicator;
