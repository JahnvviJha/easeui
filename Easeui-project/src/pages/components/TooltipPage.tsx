import ComponentDemo from "@/pages/ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button/Button";

const TooltipPage = () => {
  const usageCode = `
import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button/Button";

<Tooltip content="This is a tooltip" position="top" variant="dark">
  <Button variant="primary" size="sm">Hover me</Button>
</Tooltip>
  `;

  const positionsCode = `
<div className="flex gap-4">
  <Tooltip content="Top" position="top">
    <Button variant="outline" size="sm">Top</Button>
  </Tooltip>
  <Tooltip content="Bottom" position="bottom">
    <Button variant="outline" size="sm">Bottom</Button>
  </Tooltip>
  <Tooltip content="Left" position="left">
    <Button variant="outline" size="sm">Left</Button>
  </Tooltip>
  <Tooltip content="Right" position="right">
    <Button variant="outline" size="sm">Right</Button>
  </Tooltip>
</div>
  `;

  const propsData = [
    {
      prop: "content",
      type: "ReactNode",
      default: "undefined",
      description: "The content to display inside the tooltip",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "The position of the tooltip relative to its children",
    },
    {
      prop: "variant",
      type: '"dark" | "light" | "info"',
      default: '"dark"',
      description: "The visual style of the tooltip",
    },
    {
      prop: "delay",
      type: "number",
      default: "200",
      description: "Delay in milliseconds before showing the tooltip",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>Tooltip</h1>
        <p className="text-lg opacity-70" style={{ color: "var(--text-color)" }}>
          Small popup component to show extra info on hover.
        </p>
      </div>

      <section className="space-y-4 flex flex-col gap-10">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-color)" }}>Usage</h2>
        <div className="space-y-2">
          <ComponentDemo code={usageCode}>
            <div className="mt-8">
              <Tooltip content="tooltip text here" position="top" variant="dark">
                <Button variant="primary" size="sm">hover over me</Button>
              </Tooltip>
            </div>
          </ComponentDemo>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium" style={{ color: "var(--text-color)" }}>Positions</h3>
          <ComponentDemo code={positionsCode}>
            <div className="flex gap-4 mt-8 flex-wrap">
              <Tooltip content="Top Tooltip" position="top">
                <Button variant="outline" size="sm">Top</Button>
              </Tooltip>
              <Tooltip content="Bottom Tooltip" position="bottom">
                <Button variant="outline" size="sm">Bottom</Button>
              </Tooltip>
              <Tooltip content="Left Tooltip" position="left">
                <Button variant="outline" size="sm">Left</Button>
              </Tooltip>
              <Tooltip content="Right Tooltip" position="right">
                <Button variant="outline" size="sm">Right</Button>
              </Tooltip>
            </div>
          </ComponentDemo>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-color)" }}>API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
