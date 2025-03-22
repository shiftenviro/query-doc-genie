
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

interface ChatInterfaceProps {
  pdfFile: File | null;
  isProcessing: boolean;
}

export function ChatInterface({ pdfFile, isProcessing }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Add welcome message when PDF is loaded
  useEffect(() => {
    if (pdfFile && !isProcessing) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        content: `I've analyzed "${pdfFile.name}". What would you like to know about this document?`,
        role: "assistant",
        timestamp: new Date(),
      };
      
      setMessages([welcomeMessage]);
      
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [pdfFile, isProcessing]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim() || isProcessing) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    simulateResponse(input);
  };
  
  const simulateResponse = (query: string) => {
    setIsTyping(true);
    
    // Sample responses based on common PDF questions
    const responses = [
      "Based on the PDF content, I can tell you that this document primarily discusses the importance of data analytics in modern business.",
      "The document mentions several key figures, including John Smith who is cited as an expert in the field.",
      "According to the document, the methodology section outlines a three-step process for implementing the proposed solution.",
      "The PDF contains several charts on page 4 that illustrate the growth trends over the past 5 years.",
      "The executive summary states that the project achieved a 23% increase in efficiency compared to previous approaches.",
      "This appears to be a research paper with extensive citations. Would you like me to summarize the key findings?",
      "I notice this document contains technical specifications. What specific details are you looking for?",
      "The conclusion section of the document recommends further research in this area, particularly focusing on applications in emerging markets.",
    ];
    
    // Simulate typing delay (1-3 seconds)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now().toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        role: "assistant",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!pdfFile) {
    return null;
  }

  return (
    <div className="w-full h-full flex flex-col bg-white/50 rounded-xl overflow-hidden border border-black/5 subtle-shadow">
      <div className="p-3 bg-black/5 border-b border-black/5">
        <h3 className="text-sm font-medium">Chat with Document</h3>
      </div>
      
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] px-4 py-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-black text-white rounded-tr-none"
                    : "bg-black/5 text-black rounded-tl-none"
                }`}
              >
                <div className="text-sm">{message.content}</div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-black/5 text-black px-4 py-3 rounded-lg rounded-tl-none">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-black/30 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-black/30 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 rounded-full bg-black/30 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      <div className="p-3 border-t border-black/5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex gap-2"
        >
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question about your document..."
            className="flex-1 border-black/10 focus:border-black focus-visible:ring-0 focus-visible:ring-offset-0 input-shadow"
            disabled={isProcessing}
          />
          <Button
            type="submit"
            disabled={!input.trim() || isProcessing}
            className="bg-black hover:bg-black/80 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </Button>
        </form>
      </div>
    </div>
  );
}
