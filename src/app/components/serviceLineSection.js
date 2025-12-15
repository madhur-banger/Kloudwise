'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  useVelocity
} from 'framer-motion';
import { wrap } from '@motionone/utils';

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className='parallax'>
      <motion.div className='scroller' style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
export default function ServiceLineSection() {
  return (
    <section className='service_line h_3'>
      <div className='line_item'>
        <ParallaxText baseVelocity={-5}>
          <Image
            src='/assets/img/icon/burst_pucker.png'
            alt=''
            width={100}
            height={100}
          />
          <h5>We create and develop digital product</h5>
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          <Image
            src='/assets/img/icon/burst_pucker.png'
            alt=''
            width={100}
            height={100}
          />
          <h5>We create and develop digital product</h5>
        </ParallaxText>
        <ParallaxText baseVelocity={-5}>
          <Image
            src='/assets/img/icon/burst_pucker.png'
            alt=''
            width={100}
            height={100}
          />
          <h5>We create and develop digital product</h5>
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          <Image
            src='/assets/img/icon/burst_pucker.png'
            alt=''
            width={100}
            height={100}
          />
          <h5>We create and develop digital product</h5>
        </ParallaxText>
      </div>
    </section>
  );
}
