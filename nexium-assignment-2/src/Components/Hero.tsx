import { Form } from "./Form";

export function Hero() {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-12 px-2 min-h-screen">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 w-full max-w-5xl">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Paste Your Blog URL 
          </h2>
          <Form />
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            Welcome to Blog Summarizer
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Instantly get concise and accurate summaries of your favorite blogs.
            Save time, stay informed, and never miss the key points again.
          </p>
        </div>
      </div>
    </div>
  );
}
