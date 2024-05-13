import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Circle from '../Circle';
import style from "../Styles/Intro.module.css";

const HomeCoverSection = ({blogs}) => {
  
    return (
            <div className={style.container}>
                {/* Constrain image size and allocate more space to text on larger screens */}
                
                <div className={style.card}>
                    <Image 
                        src="/cat.png"
                        alt="A beautiful cat"
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        priority
                    />
                </div>

                {/* Text content with responsive sizing */}
                <div className={style.card}>
                    <h1 className={style.title}>
                    <span className={style.brandName}></span> A SITE FOR CAT OWNERS, MADE BY A CAT OWNER
                    </h1>
                    <p className={style.desc}>
                    USE OUR TOOLS TO HELP BETTER UNDERSTAND YOUR CATS DIET.
                    </p>
                    <Link href="/tools" className={style.button}>CHECK  OUT  OUR  CALCULATOR</Link>

                </div>
                <Circle backgroundColor="#91fcb6" top="-45vh" left="-45vh" />
                <Circle backgroundColor="#9197fc" right="-40vh" />
            </div>
    );
};

export default HomeCoverSection;
