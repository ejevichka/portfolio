"use client";

import Image from "next/image";
import PortfolioShell from "./components/Portfolio";
import { useRef } from "react";
import gsap from "gsap";
import { useEffect } from "react";
import PortfolioHeader from "./components/Widget";

export default function Home() {
  const eyeRef = useRef(null);
  const haloRef = useRef(null);
  const blinkRef = useRef(null);

useEffect(() => {
    if (eyeRef.current && haloRef.current && blinkRef.current) {
      // --- Убираем или комментируем старые анимации ---
      // gsap.killTweensOf([eyeRef.current, haloRef.current, blinkRef.current]); // Остановить все предыдущие анимации на этих элементах

      // --- Новые анимации ---

      // 1. Анимация самого глаза (eyeRef) - Дыхание и цифровое дрожание
      const eyeTl = gsap.timeline({ repeat: -1, yoyo: true });
      eyeTl
        .to(eyeRef.current, {
          scale: 1.03, // Легкое "дыхание"
          duration: 3,
          ease: "sine.inOut",
        })
       

      // 2. Анимация гало (haloRef) - Энергетическая пульсация и смена оттенка
      const haloTl = gsap.timeline({ repeat: -1, delay: 0.5 });
      haloTl
        .to(haloRef.current, {
          scale: 1.3,
          opacity: 0.8,
          duration: 1.5,
          ease: "power3.inOut",
          // Можно анимировать цвет через filter или backgroundColor, если элемент позволяет
          // filter: 'hue-rotate(90deg) brightness(1.2)' // Пример смены оттенка и яркости
        })
        .to(haloRef.current, {
          scale: 0.5,
          opacity: 0.5,
          duration: 5.5,
          ease: "sine.out",
          // filter: 'hue-rotate(0deg) brightness(1)' // Возврат к исходному цвету/яркости
        })
        .to(haloRef.current, { // Короткая яркая вспышка
            opacity: 1,
            scale: 1.1,
            duration: 0.2,
            repeat: 1,
            yoyo: true,
            ease: "expo.in"
        }, "-=1.5"); // Наложить вспышку ближе к концу цикла

      // 3. Анимация моргания/глитча (blinkRef + eyeRef) - Резкое цифровое моргание с глитчем
      const blinkTl = gsap.timeline({
          repeat: -1,
          repeatDelay: gsap.utils.random(3, 6), // Случайная задержка между морганиями
          paused: true // Начнем остановленным и запустим чуть позже
      });

      blinkTl
        .to(blinkRef.current, { // Быстрое закрытие "века"
          scaleY: 0.05,
          opacity: 0.9, // Сделать чуть плотнее во время моргания
          duration: 0.08,
          transformOrigin: "center center",
          ease: "expo.inOut",
        })
        .to(eyeRef.current, { // Глитч-эффект на основном глазе во время моргания
           skewX: () => gsap.utils.random(-5, 5),
           skewY: () => gsap.utils.random(-2, 2),
           filter: 'brightness(1.5) contrast(1.3)', // Резкое увеличение яркости/контраста
           duration: 0.05,
           ease: "steps(1)" // Мгновенный эффект
        }, "<") // Начать одновременно с закрытием века
        .to(blinkRef.current, { // Открытие "века"
          scaleY: 1,
          opacity: 0.6, // Вернуть исходную прозрачность
          duration: 0.15,
          ease: "power2.out",
        })
        .to(eyeRef.current, { // Убрать глитч-эффект
            skewX: 0,
            skewY: 0,
            filter: 'brightness(1) contrast(1)',
            duration: 0.05,
        }, "<0.05"); // Начать чуть позже открытия века

      // Запускаем таймлайн моргания после небольшой начальной задержки
      gsap.delayedCall(1.5, () => blinkTl.play());

    }

    // Опционально: Очистка анимаций при размонтировании компонента
    return () => {
      gsap.killTweensOf([eyeRef.current, haloRef.current, blinkRef.current]);
    };
  }, []); // Пустой массив зависимостей, чтобы useEffect выполнился один раз


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <PortfolioHeader />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       
            {/* animated eye */}
            <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
  <div
    ref={haloRef}
    className="absolute inset-0 rounded-full bg-white opacity-30 blur-3xl w-[300px] h-[300px]"
  ></div>
          <div ref={eyeRef} className="relative w-[300px] h-[300px]">
            <Image
              src="/eye.png"
              alt="animated eye"
              width={300}
              height={300}
              className="w-full h-full object-contain"
            />
            <div
              ref={blinkRef}
              className="absolute inset-0 bg-black opacity-60 rounded-full mix-blend-multiply"
            ></div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
