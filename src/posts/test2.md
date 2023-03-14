aaaaaaaaaaaaa

https://styublog.com/broken-sphere/

https://qiita.com/yoshi_yast/items/44ef9da9bc136e455950

https://zenn.dev/musuke/scraps/3363e44e550254

https://www.google.com/

https://stackoverflow.com/questions/61932918/want-to-have-an-event-handler-for-the-browsers-back-button-with-next-js

https://github.com/shuya-tamaru/arch_blog/blob/main/src/libs/MarkDownTheme.tsx

![title w:50%](https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png)

## Grasshopper

```twitter:1591459151380901888

```

[Qiita](http://qiita.com)

```success
infomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomation
```

```error
infomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomation
```

```info
infomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomation
```

```warning
infomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomationinfomationinfomationinfomationinfomationnfomationinfomationinfomation
```

```twitter:1591459151380901888

```

```youtube:MrLFSSLh8BI

```

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
