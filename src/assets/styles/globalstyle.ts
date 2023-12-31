import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {  
  :root {
    --vh: 100%;
  }
  @charset "utf-8";
  
  box-sizing: border-box;
  margin: 0;

  ::-webkit-scrollbar {
    display: none;
  } 
}
/* Reset */
body * {
  box-sizing: border-box;
  outline: none;
}
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
div,
p,
blockquote,
pre,
code,
address,
ul,
ol,
li,
menu,
nav,
section,
article,
aside,
dl,
dt,
dd,
table,
thead,
tbody,
tfoot,
label,
caption,
th,
td,
form,
fieldset,
legend,
hr,
input,
button,
textarea,
object,
figure,
figcaption {
  margin: 0;
  padding: 0;
}
body {
  -webkit-text-size-adjust: 100%;
  word-wrap: break-word;
  word-break: break-all;
}
body,
input,
select,
textarea,
button {
  border: none;
  font-size: 1.4rem;
  font-family: 'Noto Sans KR', sans-serif;
  color: #333333;
}
ul,
ol,
li {
  list-style: none;
}
table {
  border-spacing: 0;
}
img,
fieldset {
  border: 0;
}
address,
cite,
code {
  font-style: normal;
  font-weight: normal;
}
em,
i {
  font-style: normal;
}
label,
img,
input,
select,
textarea,
button {
  vertical-align: middle;
}
.hide,
legend {
  overflow: hidden;
  display: block;
  position: absolute;
  border: 0;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
}
hr {
  display: none;
}
main,
header,
section,
nav,
footer,
aside,
article,
figure {
  display: block;
}
a {
  color: #333;
  text-decoration: none;
}
button {
  cursor: pointer;
  color: #333;
  background-color: transparent;
  outline: none;
  font-size: 1.6rem;
}
caption {
  position: relative;
}
/* 스크롤 스타일 */
.scroll {
  overflow: auto;
}
.scroll::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.scroll::-webkit-scrollbar-thumb {
  background-color: #e0e0e0;
  border-radius: 100px;
}
.scroll::-webkit-scrollbar-track {
  background-color: #e5e5e5;
  border-radius: 100px;
  background-clip: padding-box;
  border: 3px solid transparent;
}

/* REM rules */
html {
  font-size: 5px;
}
/* header,
main {
  border-left: 1px solid colors.$main-border-color;
  border-right: 1px solid colors.$main-border-color;
} */
@media screen and (min-width: 216px) {
  html {
    font-size: 6px;
  }
}

@media screen and (min-width: 229px) {
  html {
    font-size: 6.3611px;
  }
}

@media screen and (min-width: 250px) {
  html {
    font-size: 6.9444px;
  }
}

@media screen and (min-width: 252px) {
  html {
    font-size: 7px;
  }
}

@media screen and (min-width: 288px) {
  html {
    font-size: 8px;
  }
}

@media screen and (min-width: 292px) {
  html {
    font-size: 8.1111px;
  }
}

/* iphone 5 */
@media screen and (min-width: 320px) {
  html {
    font-size: 8.8888px;
  }
}

@media screen and (min-width: 324px) {
  html {
    font-size: 9px;
  }
}

@media screen and (min-width: 360px) {
  html {
    font-size: 10px;
  }
}
`;

export default GlobalStyle;
