<template>
  <div class="columns reverse-row-order">
    <div class="block column is-half result">
      <div class="subtitle">表示</div>
      <div v-html="out"></div>
    </div>
    <div class="block column is-half">
      <div class="subtitle">ソース</div>
      <FlexTextarea v-model="md"></FlexTextarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import FlexTextarea from "@/components/FlexTextarea.vue";
import { ref, watch } from "vue";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
const md = ref("");
const out = ref("");
let lastTimer: number | null = null;
const interval = 500;
marked.setOptions({
  breaks: true,
});
watch(md, (val) => {
  if (lastTimer) clearTimeout(lastTimer);
  lastTimer = setTimeout(() => {
    out.value = sanitizeHtml(marked.parse(val));
  }, interval);
});
md.value = `# Markdown記法
サレ祭のサイトで使えるようにする予定の記法。MDとか略されることがある。
## 何故導入するか
サレ祭IT班がHTML打ち込んでも面白くないので、誰でもテキスト装飾できたらいいなと。
(特に理由はないの意。使いたい人だけが使ってくださいな。)

CSS(文字の大きさとかフォントとか、色を決めるやつ)をまだ調整していないので、すこし文字がでかかったりすると思いますが、本番では調整されるものとして見ておいてもらえるとありがたい。
## 文法
Markdownでは、Markdownの文法と、HTMLの文法の両方を使用することができる。
### タイトル、サブタイトル
\`#\`記号で記述する。多く連ねると、小さい見出しになる。
### 文字装飾
\`*\`,\`**\`,\`***\`でくくると、それぞれ *italic* **bold** ***both*** になる。
(イタリックは日本語フォントだと適用されない可能性あり。)
### 箇条書き
\`-\`記号(等)を文頭に置く。箇条書きの前後に空行が必要

- ほげ
- ふが
- ぴよ

\`n.\`と記述することで、数字付きリストが記述できる。同様に前後に空行が必要。
数字は自動で割り振られるので、すべて1.にしておくといいかも。

1. ふー
1. ばー
1. ばず

### 引用
\`>\`を行初めに書くと引用になる。前後に空行が必要

> 引用
> 引用

## 最後に
他にも使用可能な文法があるが、ここに書くほど頻繁に使うものではないため、こちらの記事を参照されたい。
https://qiita.com/Qiita/items/c686397e4a0f4f11683d

このテキストボックスは編集することができるので、自由に編集して遊んでみて下さい。
`;
</script>

<style scoped lang="scss">
.reverse-row-order {
  flex-direction: row-reverse;
}
</style>

<style lang="scss">
h1 {
  font-size: 3rem;
  padding: 0.2rem 2rem;
  border-left: 4px solid #888;
}
h2 {
  font-size: 2rem;
  border-bottom: 1px solid #888;
}
h3 {
  font-size: 1.5rem;
  color: #555;
  border-left: 3px solid #ccc;
  padding: 0rem 0.5rem;
}
h4 {
  font-size: 1.25rem;
}
h5 {
  font-size: 1.125rem;
}
h6 {
  font-size: 1rem;
}
ul > li::before {
  content: "・";
}
ul > li {
  margin-left: 1rem;
}
ol > li {
  margin-left: 2rem;
}
.result > div > * {
  margin-bottom: 1rem;
}
blockquote {
  border-left: 4px solid #888;
  color: #444;
  margin-left: 1rem;
  padding: 0.2rem 1rem;
  background-color: #eee;
  border-radius: 0px 10px 10px 0px;
}
</style>
