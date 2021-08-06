export type ImageProps = {
  src: string;
  width: number;
};

export function ImageLoader({ src, width }: ImageProps) {
  return `https:${src}?w=${width}`;
};