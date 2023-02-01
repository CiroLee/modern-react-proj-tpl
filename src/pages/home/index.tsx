import { FC } from 'react';
import CounterAnimate from '@/components/ConterAninate';
import style from './index.module.scss';
const Home: FC = () => {
  return (
    <div>
      <CounterAnimate />
      <div className={style.home} m="t-10%" text-center text-14px>
        <a href="https://github.com/CiroLee/modern-react-proj-tpl" target="_blank" rel="noreferrer">
          modern-react-proj-tpl
        </a>
        <a href="https://github.com/pmndrs/zustand" target="_blank" rel="noreferrer">
          zustand
        </a>
        <a href="https://zh-hans.reactjs.org/" target="_blank" rel="noreferrer">
          react
        </a>
        <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
          react-router(v6)
        </a>
      </div>
    </div>
  );
};

export default Home;
