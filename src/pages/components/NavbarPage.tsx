import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const usageCode = `
import { Navbar } from "@/components/navbar";

<div className="flex flex-col gap-6 w-full">
  <Navbar variant="light" size="default" animation="fadeIn" />
  <Navbar variant="dark" size="lg" animation="slideUp" />
  <Navbar variant="primary" size="sm" animation="scaleIn" />
  <div className="p-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md">
    <Navbar variant="glass" />
  </div>
</div>
  `;

  const propsData = [
    {
      prop: "variant",
      type: '"dark" | "light" | "primary" | "glass"',
      default: '"light"',
      description: "The visual style variant of the navbar",
    },
    {
      prop: "size",
      type: '"default" | "sm" | "lg" | "xl"',
      default: '"default"',
      description: "The height size of the navbar",
    },
    {
      prop: "animation",
      type: "string",
      default: '"fadeIn"',
      description: "GSAP entrance animation",
    },
    {
      prop: "hoverAnimation",
      type: "string",
      default: '"none"',
      description: "GSAP hover animation",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>Navbar</h1>
        <p className="text-lg opacity-70" style={{ color: "var(--text-color)" }}>
          A responsive navigation header with GSAP animations.
        </p>
      </div>

      <section className="space-y-4 flex flex-col gap-10">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-color)" }}>Examples</h2>
        
        <div className="space-y-2">
          <ComponentDemo code={usageCode}>
            <div className="flex flex-col gap-6 w-full mt-4">
              <Navbar variant="light" size="default" />
              <Navbar variant="dark" size="lg" />
              <Navbar variant="primary" size="sm" />
              <div className="p-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md">
                <Navbar variant="glass" />
              </div>
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

export default NavbarPage;
