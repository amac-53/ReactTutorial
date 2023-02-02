import { useContext, useEffect, useState, useRef, useReducer, useMemo, useCallback } from 'react'
import './App.css'
import AmacContext from './main';
import SomeChild from './SomeChild';
import useLocalStorage from './useLocalStorage';

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  // 変化を検出して再レンダリング
  const [count, setCount] = useState(0);
  // データの受け渡し
  const amacInfo = useContext(AmacContext);
  // htmlタグの中身を参照
  const ref = useRef();

  // stateは更新する値, dispatch は reducer への action 通知のイメージ
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
  }

  const handleRef = () => {
    console.log(ref)
    // console.log(ref.current.value)
  }

  // 発火のタイミングを司る
  useEffect(() => {
    console.log("Hello hooks")
    // setCount(count + 1); // 無限ループ
  }, [count])

  // useMemo
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  // setCount02が呼ばれるごとに呼ばれる
  // setCount01のときも仮想DOM構築のため，はしってしまう
  // const square = () => {
  //   let i = 0;
  //   while(i < 2000000000){
  //     i++;
  //   }
  //   console.log("クリックされました")
  //   return count02 * count02;
  // }

  // count02のときだけ走るようにする
  const square = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    console.log("クリックされました")
    return count02 * count02;
  }, [count02])

  // useCallback
  const [counter, setCounter] = useState(0);

  // これだと，他の state が更新されたときに実行されてしまう
  // const showCount = () => {
  //   alert("これは重い処理です")
  // }

  // counter が変化するときだけ呼ばれるコールバック関数
  // 適切な設定をすることで，
  const showCount = useCallback(() => {
    alert("これは重い処理です")
  }, [counter])

  // カスタムフック
  const [age, setAge] = useLocalStorage("age", 23);

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>＋</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{amacInfo.name}</p>
      <p>{amacInfo.age}</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>useRef</button>

      <hr />
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({ type: "increment" })} >＋</button>
      <button onClick={() => dispatch({ type: "decrement" })} >ー</button>

      <hr />
      <h1>useMemo</h1>
      <div>カウント１：{count01}</div>
      <div>カウント２：{count02}</div>
      <div>結果：{square}</div>
      <button onClick={() => setCount01(count01 + 1)}>＋</button>
      <button onClick={() => setCount02(count02 + 1)}>＋</button>

      <hr />
      <h1>useCallback</h1>
      <SomeChild showCount={showCount} />

      <hr />
      <h1>カスタムフック</h1>
      <p>{age}</p>
      <button onClick={() => setAge(80)}>年齢をセット</button>
    </div>
  )
}

export default App
