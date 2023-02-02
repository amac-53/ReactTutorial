# Redux
- サードパーティの状態管理ライブラリで，vue でいう pinia
- 公式が配布する React Hooks でも同様のことができそうで，そちらが推奨されているため徐々に移行することが考えられる（？）

# React Hooks（特に重要そうなもの）
- useState（データの変更とともに再レンダリングしたいとき）
- useEffect（発火のタイミングを指定したいとき（第二引数に特定のデータを配列で指定．空配列だとmount時））
- useContext（Reduxのhooks版）
- useRef（htmlタグの中身を参照）
- useReducer（Reduxのreducer部分）
- useMemo（**値を**ブラウザにメモ化）
- useCallBack（**コールバック関数を**メモ化）
# 参考
- [【徹底解説】React hooks将来性 & Redux不要説](https://tech-parrot.com/react/react-hooks-redux/#React_Redux)