import { getImageProps } from "next/image";

export default function Home() {
  const common = { alt: 'Test Your English', sizes: '100vw' }
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    fill: true,
    quality: 80,
    src: '/test-english-home-bg-1920.jpg',
  })
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    fill: true,
    quality: 70,
    src: '/test-english-home-bg-1650.webp',
  })
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    fill: true,
    quality: 70,
    src: '/test-english-home-bg-h.jpg',
  })

  return (
    <>
      <header>
        <picture>
          <source media="(min-width: 1920px)" srcSet={desktop} />
          <source media="(min-width: 800px)" srcSet={tablet} />
          <source media="(min-width: 550px)" srcSet={mobile} />
          <img srcSet="/test-english-home-bg-v.webp" {...rest} style={{ width: '100%', height: '100%' }} />
        </picture>
        <div className="absolute top-0 left-0 max-w-[90vw] mt-[50vh] px-[1em] pt-[1em]">
          <h1 className="font-bold text-[44px] leading-[1] text-white tracking-[1px]">
            Test-English
            <br />
            <strong className="text-[0.8em] text-c-testenglish font-bold">Take your learning with you!</strong>
          </h1>
          <p className="max-w-[40vw] text-[17px] font-light leading-[1.3] mt-2.5 text-white">
            Grammar lessons with exercises and clear explanations, grammar charts, reading and listening tests with transcriptions,
            writing lessons, instant marking, answer feedback, and much more!
          </p>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

      </main>
    </>
  );
}
