import { getImageProps } from "next/image";

export default function Home() {
  const common = { alt: 'Test Your English', sizes: '100vw' }
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1440,
    height: 875,
    quality: 80,
    src: '/test-english-home-bg-1920.jpg',
  })
  const {
    props: { srcSet: tablet, ...restTablet },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1334,
    quality: 70,
    src: '/test-english-home-bg-1650.webp',
  })
  const {
    props: { srcSet: mobile, ...restMobile },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1334,
    quality: 70,
    src: '/test-english-home-bg-h.jpg',
  })

  return (
    <>
      <header>

      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

      </main>
    </>
  );
}
