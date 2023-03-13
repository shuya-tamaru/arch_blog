# 構造について

建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト
建設業界向けの技術ブログ投稿サイト

https://styublog.com/broken-sphere/
https://styublog.com/broken-sphere/

# 意匠について

![title w:50%](https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png)

## Grasshopper

```twitter:1591459151380901888

```

```youtube:MrLFSSLh8BI

```

### Rhinoceros 基礎

#### 建築歴史

##### Parametric

# 意匠について ssssssssssssssss

###### まとめ

paragraph

~~取消線を引く~~

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

$$\rho \frac{D \bm{u}}{Dt} = -\nabla p + (\lambda + \mu ) \nabla (\nabla \cdot \bm{u}) + \mu \nabla ^{2} \bm{u} +\rho \tilde{\bm{F}}$$

ssssssss
ddddd

- Lists
- [ ] todo
- [x] done

A table:

| TH  | TH  |
| --- | --- |
| TD  | TD  |
| TD  | TD  |

| TH  |
| --- |
| TD  |
| TD  |

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

## 意匠について
