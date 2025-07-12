import { Form } from "./Form";

export function Hero() {
  return (
    <div className="flex justify-center items-center bg-background py-12 px-2 min-h-screen transition-colors">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 w-full max-w-5xl">
        <div className="w-full max-w-md bg-card rounded-2xl shadow-xl p-8 flex flex-col items-center border border-border transition-colors">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Paste Your Blog URL!
          </h2>
          <Form />
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 transition-colors">
            Welcome to Blog Summarizer
          </h1>
            <p className="text-lg text-muted-foreground max-w-xl transition-colors">
            Effortlessly generate clear, concise summaries of any blog post. Save time, grasp the essentials, and stay up-to-date with just a single click.
            </p>
        </div>
      </div>
    </div>
  );
}
