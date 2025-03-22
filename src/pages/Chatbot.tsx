
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PDFUploader } from "@/components/PDFUploader";
import { PDFViewer } from "@/components/PDFViewer";
import { ChatInterface } from "@/components/ChatInterface";
import { processPDF } from "@/utils/pdfUtils";
import { useToast } from "@/components/ui/use-toast";

const Chatbot = () => {
  const { toast } = useToast();
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedText, setProcessedText] = useState<string | null>(null);

  const handlePDFSelect = async (file: File) => {
    setPdfFile(file);
    setIsProcessing(true);
    
    try {
      // Process the PDF file
      const text = await processPDF(file);
      setProcessedText(text);
      
      toast({
        title: "PDF Processed Successfully",
        description: "You can now chat with your document.",
      });
    } catch (error) {
      console.error("Error processing PDF:", error);
      toast({
        title: "Error Processing PDF",
        description: "There was an error processing your PDF. Please try again.",
        variant: "destructive",
      });
      setPdfFile(null);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setPdfFile(null);
    setProcessedText(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-6 md:px-12 border-b border-black/5 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-black font-medium text-xl tracking-tight hover:opacity-80 transition-opacity duration-200"
          >
            Shubham's PDF Reader
          </Link>
        </div>
      </header>

      <main className="flex-1 py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {!pdfFile ? (
            <div>
              <h1 className="text-3xl font-bold text-center mb-8">
                Upload a PDF to Get Started
              </h1>
              <PDFUploader onPDFSelect={handlePDFSelect} isLoading={isProcessing} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
              <PDFViewer file={pdfFile} onReset={handleReset} />
              <ChatInterface pdfFile={pdfFile} isProcessing={isProcessing} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Chatbot;
