import React, { useEffect, useState } from "react";
import { ColorfullMessage } from "./components/ColorfullMessage";

const App = () => {
  console.log("最初");
  // stateの定義
  // 1つ目にstateの変数名、2つ目にstateを更新するセッターをuseStateから分割だいにゅう
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useEffectの第2引数にからの配列をわたすことで画面をよみこんだ最初の一回のみ実行したい処理を記述できる
  useEffect(() => {
    console.log("最初だけ");
  }, []);

  // 第2引数の配列に監視したいstate変数していすることでこの中の処理は指定したstateが更新された時のみ読み込まれるようになる
  useEffect(() => {
    console.log("numのみ");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfullMessage color="blue">おげんきですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です！</ColorfullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </React.Fragment>
  );
};

// 関数を他のファイルから読み込める形にエクスポート
export default App;
