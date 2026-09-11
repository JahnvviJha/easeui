import ComponentDemo from "@/pages/ComponentsDemo";

const ArticlePage = () => {
  const articleCode = `
<article className="prose prose-slate dark:prose-invert max-w-none">
  <h1 className="text-3xl font-extrabold mb-4">Building UI Components</h1>
  <p className="text-lg opacity-80 mb-6">
    having a good component library saves a lot of time when building apps.
  </p>
  <h2 className="text-2xl font-bold mt-8 mb-4">Composition</h2>
  <p className="mb-4 opacity-80 leading-relaxed">
    it's just easier to reuse buttons and inputs instead of rewriting tailwind classes every single time we make a new page.
  </p>
  <blockquote className="border-l-4 border-primary-color pl-4 italic opacity-90 my-6">
    "design systems help projects scale."
  </blockquote>
  <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
  <p className="mb-4 opacity-80 leading-relaxed">
    easeui is a pretty solid starting point for this.
  </p>
</article>
  `;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>Article</h1>
        <p className="text-lg opacity-70" style={{ color: "var(--text-color)" }}>
          basic typography layout for rendering blogs or long text content.
        </p>
      </div>

      <section className="space-y-4 flex flex-col gap-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--text-color)" }}>Usage</h2>
          <ComponentDemo code={articleCode}>
            <div className="text-left w-full max-w-2xl mx-auto py-8" style={{ color: "var(--text-color)" }}>
              <article className="max-w-none">
                <h1 className="text-3xl font-extrabold mb-4">Building UI Components</h1>
                <p className="text-lg opacity-80 mb-6">
                  having a good component library saves a lot of time when building apps.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Composition</h2>
                <p className="mb-4 opacity-80 leading-relaxed">
                  it's just easier to reuse buttons and inputs instead of rewriting tailwind classes every single time we make a new page.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic opacity-90 my-6">
                  "design systems help projects scale."
                </blockquote>
                <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p className="mb-4 opacity-80 leading-relaxed">
                  easeui is a pretty solid starting point for this.
                </p>
              </article>
            </div>
          </ComponentDemo>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
