import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { normalizeLearningMarkdown } from "@/lib/normalizeLearningMarkdown";

type Props = {
  markdown: string;
};

/** react-markdown kann `node` mitschicken — nicht aufs DOM durchreichen. */
function omitNode<T extends object>(props: T): Omit<T, "node"> {
  const { node, ...rest } = props as T & { node?: unknown };
  void node;
  return rest;
}

const markdownComponents: Components = {
  a: ({ href, children, ...rest }) => (
    <a href={href} target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  ),
  /** Tabellen: natürliche Spaltenbreiten, horizontal scrollen statt Layout zerquetschen. */
  table: (props) => {
    const { children, ...tableProps } = omitNode(props);
    return (
      <div className="prose-table-scroll" role="region" aria-label="Tabelle" tabIndex={0}>
        <table {...tableProps}>{children}</table>
      </div>
    );
  },
  img: (props) => {
    const { alt, children, ...imgProps } = omitNode(props);
    void children;
    return (
      <span className="prose-figure my-6 block">
        <img
          alt={alt ?? ""}
          className="max-h-[min(70vh,32rem)] w-auto max-w-full rounded-lg border border-slate-200 shadow-sm"
          {...imgProps}
        />
      </span>
    );
  },
  pre: (props) => {
    const { children, ...preProps } = omitNode(props);
    return (
      <pre
        className="prose-pre my-6 overflow-x-auto rounded-xl border border-slate-200 bg-slate-900 p-4 text-sm text-slate-100"
        {...preProps}
      >
        {children}
      </pre>
    );
  },
  hr: (props) => <hr className="prose-hr my-10" {...omitNode(props)} />,
};

export function MarkdownBody({ markdown }: Props) {
  const md = normalizeLearningMarkdown(markdown);
  return (
    <div className="prose-module">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {md}
      </ReactMarkdown>
    </div>
  );
}
