import dynamic from 'next/dynamic';

const LottieAnimationNoSSR = dynamic(() => import("@/src/components/Contact/LottieAnimation"), {
    ssr: false,
  });  

export default function Contact() {
    return (
      <section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex  flex-col md:flex-row items-center justify-center text-dark dark:text-light">
        <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light"><LottieAnimationNoSSR /></div>
        <div className="w-full  md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
          <h2 className="font-bold capitalize  text-2xl xs:text-3xl sm:text-4xl">Let's Connect!</h2>
          <p className="font-bold capitalize  text-1xl xs:text-2xl sm:text-2xl mt-2">Email me <a href="mailto:samrajsingh44@gmail.com" className="underline">here</a></p>
        </div>
      </section>
    );
  }