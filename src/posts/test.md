![](https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png)

# h1 タイトル

## h2 タイトル

### h3 タイトル

#### h4 タイトル

##### h5 タイトル

###### h6 タイトル

```js:index.tsx
import { CodeComponent } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { escapeHtml } from "../libs/EscapeHtml";
import classes from "../styles/textArea.module.css";

const CodeBlack: CodeComponent = ({ inline, className, children }) => {
  if (inline) {
    return <code className={className}>{children}</code>;
  }
  const match = /language-(\w+)/.exec(className || "language-plaintext");
  const filename = match ? className?.split(":")[1] ?? undefined : undefined;

  return (
    <>
      {filename && (
        <div className={classes.codeBlockFileNameContainer}>
          <span className={classes.codeBlockFilename}>
            {escapeHtml(filename)}
          </span>
        </div>
      )}

      <SyntaxHighlighter
        style={tomorrow}
        language={match ? match[1] : undefined}
        filename={filename}
        children={String(children).replace(/\n$/, "")}
      />
    </>
  );
};

export default CodeBlack;

```
