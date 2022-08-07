// これらは必須
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

/* //関数としてこんぽーねんとを定義する
const App = () => {
  // JSX JavaScriptのなかにHTMLを書く記法
  return (
    <React.Fragment>
      <h1>こんにちは</h1>
      <p>おげんきですか？</p>
    </React.Fragment>
  );
}; */

// react-domをりようしてコンポーネントをレンダリングする
ReactDom.render(<App />, document.getElementById("root"));
