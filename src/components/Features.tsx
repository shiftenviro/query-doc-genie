
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <div className={`p-8 rounded-2xl bg-white/50 border border-black/5 subtle-shadow transition-all duration-300 hover:translate-y-[-5px] opacity-0 animate-fade-up ${delay}`}>
      <div className="mb-6 inline-block p-3 rounded-xl bg-black/5">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-black/60">{description}</p>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-black/5 border border-black/10">
            <span className="text-sm font-medium text-black/80">Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything you need to analyze your documents
          </h2>
          <p className="text-lg text-black/60 max-w-3xl mx-auto">
            Powerful AI tools that transform the way you interact with PDF documents
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                <path d="M3 6v13"></path>
                <path d="M12 6v13"></path>
                <path d="M21 6v13"></path>
              </svg>
            }
            title="Instant PDF Analysis"
            description="Upload any PDF and our AI will instantly analyze its content, making it searchable and interactive."
            delay="animate-delay-100"
          />

          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            }
            title="Contextual Conversation"
            description="Ask questions about your document and receive accurate, context-aware responses based on the content."
            delay="animate-delay-200"
          />

          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-15"></path>
                <circle cx="4" cy="19.5" r="2.5"></circle>
              </svg>
            }
            title="Web Knowledge Integration"
            description="Extend beyond your document with AI that can fetch additional information from the web when needed."
            delay="animate-delay-300"
          />

          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <path d="M16 2.2c.7.5 1.2 1.4 1.5 2.6.3 1.2.3 2.4.1 3.5a3.5 3.5 0 0 1-1.2 2.2 4 4 0 0 1-3.7.9 4 4 0 0 1-3-3 4 4 0 0 1 .5-3.4 4 4 0 0 1 4.4-2 4 4 0 0 1 1.4.3"></path>
                <path d="M7 12a4 4 0 0 1-4-4"></path>
              </svg>
            }
            title="Intelligent Summaries"
            description="Get concise summaries of your documents to quickly grasp the most important information."
            delay="animate-delay-100"
          />

          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            }
            title="Smart Search"
            description="Find exactly what you're looking for with intelligent search that understands context and meaning."
            delay="animate-delay-200"
          />

          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 17h16"></path>
              </svg>
            }
            title="Fast Processing"
            description="Experience rapid document processing with our optimized AI models designed for speed and efficiency."
            delay="animate-delay-300"
          />
        </div>
      </div>
    </section>
  );
}
