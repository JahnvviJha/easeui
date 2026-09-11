import ComponentDemo from "@/pages/ComponentsDemo";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input";
import { PasswordInput } from "@/components/Input/PasswordInput";

const FormPage = () => {
  const loginFormCode = `
import { Input, PasswordInput } from "@/components/Input";
import { Button } from "@/components/Button/Button";

<form className="space-y-4 max-w-sm w-full p-6 border rounded-lg shadow-sm bg-card">
  <div className="space-y-2 text-center mb-6">
    <h2 className="text-2xl font-bold">Welcome back</h2>
    <p className="text-sm opacity-70">Enter your credentials to login</p>
  </div>
  <Input label="Email" type="email" placeholder="john@example.com" />
  <PasswordInput label="Password" placeholder="••••••••" />
  <Button variant="primary" size="full" className="mt-4">Sign In</Button>
</form>
  `;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>Form</h1>
        <p className="text-lg opacity-70" style={{ color: "var(--text-color)" }}>
          Example forms demonstrating how to compose input and button components together.
        </p>
      </div>

      <section className="space-y-4 flex flex-col gap-10">
        <div className="space-y-2">
          <h3 className="text-xl font-medium" style={{ color: "var(--text-color)" }}>Login Form</h3>
          <ComponentDemo code={loginFormCode}>
            <div className="flex justify-center py-8 w-full">
              <form className="space-y-4 max-w-sm w-full p-6 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--card-bg, transparent)' }}>
                <div className="space-y-2 text-center mb-6">
                  <h2 className="text-2xl font-bold" style={{ color: "var(--text-color)" }}>Welcome back</h2>
                  <p className="text-sm opacity-70" style={{ color: "var(--text-color)" }}>Enter your credentials to login</p>
                </div>
                <Input label="Email" type="email" placeholder="john@example.com" />
                <PasswordInput label="Password" placeholder="••••••••" />
                <div className="pt-2">
                  <Button variant="primary" size="full" hoverAnimation="scale">Sign In</Button>
                </div>
              </form>
            </div>
          </ComponentDemo>
        </div>
      </section>
    </div>
  );
};

export default FormPage;
