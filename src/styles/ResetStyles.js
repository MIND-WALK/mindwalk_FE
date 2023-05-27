import { createGlobalStyle } from "styled-components";

const reset = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1.5;
    width: 375px;
    height: 667px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    background-color: #fff;
    box-shadow: 10px 9px 44px 1px rgba(181,181,181,0.68);
    -webkit-box-shadow: 10px 9px 44px 1px rgba(181,181,181,0.68);
    -moz-box-shadow: 10px 9px 44px 1px rgba(181,181,181,0.68);
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    font-family: "Pretendard", "sans-serif";
    font-size: 62.5%;
    background-color: #e0e0e0;
  }
  ol,
  ul {
    list-style: none;
  }
  a {
    background-color: transparent;
    text-decoration: none;
    outline: none;
    color: inherit;
    &:active,
    &:hover {
      text-decoration: none;
      color: inherit;
      outline: 0;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    background: none;
    padding: 0;
    user-select: none;
    cursor: pointer;
    white-space: nowrap;
    letter-spacing: inherit;
    font: inherit;
    color: inherit;
  }
  input {
    outline: none;
  }
  :root {
    --main-green-color: #4DBA6D;  
    --sub-green-color: #007D37;  
    --sub-yellow-color: #FFF200;  
  }

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
  font-family: "Pretendard-Light";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Pretendard-SemiBold";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 600;
  font-style: normal;
}
`;

export default reset;
