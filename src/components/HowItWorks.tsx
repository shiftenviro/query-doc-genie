
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-black/5 border border-black/10">
            <span className="text-sm font-medium text-black/80">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Three simple steps to get started
          </h2>
          <p className="text-lg text-black/60 max-w-3xl mx-auto">
            Our intuitive process makes it easy to extract insights from your documents
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-6 mb-16">
          <div className="flex flex-col items-center text-center opacity-0 animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white text-2xl font-semibold mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">Upload Your PDF</h3>
            <p className="text-black/60">
              Simply drag and drop your PDF or select it from your computer. We support documents of all sizes.
            </p>
          </div>

          <div className="flex flex-col items-center text-center opacity-0 animate-fade-up animate-delay-100">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white text-2xl font-semibold mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">Process Document</h3>
            <p className="text-black/60">
              Our AI analyzes your document, understanding its structure, content, and context in seconds.
            </p>
          </div>

          <div className="flex flex-col items-center text-center opacity-0 animate-fade-up animate-delay-200">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white text-2xl font-semibold mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">Start Chatting</h3>
            <p className="text-black/60">
              Ask questions, request summaries, or search for specific information in a natural conversation.
            </p>
          </div>
        </div>

        <div className="text-center opacity-0 animate-fade-up animate-delay-300">
          <Link to="/chat">
            <Button size="lg" className="bg-black hover:bg-black/80 text-white rounded-xl px-8 transition-all duration-300 h-12">
              Try It Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
