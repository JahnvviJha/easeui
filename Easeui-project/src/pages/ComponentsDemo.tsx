import { useState } from "react";
import { Code } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({ children, code }: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm" style={{ backgroundColor: "var(--card-bg, #f3f4f6)" }}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-800" style={{ backgroundColor: "var(--bg-color)" }}>
        <span className="text-sm font-medium" style={{ color: "var(--text-color)" }}>Preview</span>
        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="flex items-center gap-1 px-3 py-1 text-sm rounded transition-colors border border-gray-200 dark:border-gray-700 hover:opacity-80"
          style={{ color: "var(--text-color)" }}
        >
          <Code size={14} />
          {isCodeVisible ? "Hide Code" : "View Code"}
        </button>
      </div>

      <div className="py-20 px-4 flex items-center justify-center">{children}</div>

      {isCodeVisible && (
        <div className="border-t border-gray-200 dark:border-gray-800">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;
