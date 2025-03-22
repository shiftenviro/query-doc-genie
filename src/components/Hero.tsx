
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center px-6 md:px-12 pt-20 pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,120,120,0.1),rgba(255,255,255,0))] z-0"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-black/5 border border-black/10">
          <span className="text-sm font-medium text-black/80">
            Intelligent Document Interaction
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up opacity-0">
          Chat With Your PDFs
        </h1>
        
        <p className="text-xl md:text-2xl text-black/70 max-w-3xl mx-auto mb-10 animate-fade-up opacity-0 animate-delay-200">
          Upload your documents and instantly get answers, insights, and analysis through a seamless AI-powered conversation.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 animate-fade-up opacity-0 animate-delay-300">
          <Link to="/chat">
            <Button size="lg" className="bg-black hover:bg-black/80 text-white rounded-xl px-8 transition-all duration-300 h-12">
              Get Started
            </Button>
          </Link>
          <a href="#how-it-works">
            <Button variant="outline" size="lg" className="border-black/20 text-black hover:bg-black/5 rounded-xl px-8 transition-all duration-300 h-12">
              Learn More
            </Button>
          </a>
        </div>
        
        <div className="max-w-4xl mx-auto glass rounded-2xl overflow-hidden subtle-shadow border border-black/5 animate-fade-up opacity-0 animate-delay-400">
          <div className="p-2 bg-black/5 border-b border-black/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-black/10"></div>
              <div className="w-3 h-3 rounded-full bg-black/10"></div>
              <div className="w-3 h-3 rounded-full bg-black/10"></div>
            </div>
          </div>
          <div className="aspect-[16/9] bg-black/5 flex items-center justify-center">
            <p className="text-black/40 text-sm">
              PDF conversation interface
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center animate-pulse-subtle">
        <a href="#features" className="flex flex-col items-center text-black/50 hover:text-black transition-colors duration-200">
          <span className="text-xs font-medium mb-2">Scroll to learn more</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-float">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
