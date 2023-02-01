import { useRef, useState } from 'react';
import classNames from 'classnames';
import { useCounterState } from '@/store/counter';
import style from './index.module.scss';
const CounterAnimate = () => {
  const numRef = useRef<HTMLParagraphElement | null>(null);
  const count = useCounterState((state) => state.count);
  const increamentCount = useCounterState((state) => state.increament);
  const resetCounter = useCounterState((state) => state.reset);
  const [isAnimate, setAnimate] = useState(false);
  const changeCounter = (step: number) => {
    setAnimate(true);
    increamentCount(step);
    numRef.current?.addEventListener('animationend', () => {
      setAnimate(false);
    });
  };
  return (
    <div>
      <div bg="#304acd" shadow="lg #6a80ef/40" flex items-center h-300px>
        <p
          ref={numRef}
          text-white
          w-full
          text-8rem
          font-bold
          text-center
          className={classNames({ [style.bounce]: isAnimate })}>
          {count}
        </p>
      </div>
      <div mt-20px flex justify-center>
        <div className={style['counter__button--group']}>
          <button className={style.btn} onClick={() => changeCounter(-1)}>
            -
          </button>
          <button className={style.btn} onClick={() => changeCounter(1)}>
            +
          </button>
        </div>
        <button ml-10px className={classNames(style.btn)} onClick={resetCounter}>
          reset
        </button>
      </div>
    </div>
  );
};

export default CounterAnimate;
