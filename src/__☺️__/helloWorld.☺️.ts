import {
  lmaoTestRunner,
  compilerTest,
} from "../lmaoTestRunner/lmaoTestRunner.js";

console.log();

// Hello World Test
const lmaoCode = "🤣🪬🫦Hello World💀🫦💀🪬💀🤣";
const expectedHtml = `<html><body><h1>Hello World</h1></body></html>`;
lmaoTestRunner("Hello World", () => compilerTest(lmaoCode, expectedHtml));

// Div Test
const divLmao = "📦I am a div💀📦";
const expectedDivHtml = "<div>I am a div</div>";
lmaoTestRunner("Div Test", () => compilerTest(divLmao, expectedDivHtml));

// Span Test
const spanLmao = "🤪I am a span💀🤪";
const expectedSpanHtml = "<span>I am a span</span>";
lmaoTestRunner("Span test", () => compilerTest(spanLmao, expectedSpanHtml));

// Paragraph Test
const paragraphLmao = "💬I am a paragraph💀💬";
const expectedParagraphHtml = "<p>I am a paragraph</p>";
lmaoTestRunner("Paragraph test", () =>
  compilerTest(paragraphLmao, expectedParagraphHtml)
);
