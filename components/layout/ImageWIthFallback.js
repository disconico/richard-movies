import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImageWithFallback = ({ fallbackImage, alt, src, width, height, ...props }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      alt={alt}
      width={width}
      height={height}
      onError={setError}
      src={error ? fallbackImage : src}
      {...props}
      draggable={false}
    />
  );
};

export default ImageWithFallback;
