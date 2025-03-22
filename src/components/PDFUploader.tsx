
import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface PDFUploaderProps {
  onPDFSelect: (file: File) => void;
  isLoading: boolean;
}

export function PDFUploader({ onPDFSelect, isLoading }: PDFUploaderProps) {
  const { toast } = useToast();
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        
        if (file.type === "application/pdf") {
          onPDFSelect(file);
        } else {
          toast({
            title: "Invalid file type",
            description: "Please upload a PDF file.",
            variant: "destructive",
          });
        }
      }
    },
    [onPDFSelect, toast]
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        
        if (file.type === "application/pdf") {
          onPDFSelect(file);
        } else {
          toast({
            title: "Invalid file type",
            description: "Please upload a PDF file.",
            variant: "destructive",
          });
        }
      }
    },
    [onPDFSelect, toast]
  );

  return (
    <div
      className={`w-full max-w-xl mx-auto px-8 py-16 rounded-2xl border-2 border-dashed transition-all duration-200 ${
        dragActive ? "border-black bg-black/5" : "border-black/20"
      } ${isLoading ? "opacity-50 pointer-events-none" : ""}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-6 text-black/50"
        >
          <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>
          <path d="M14 2v6h6"></path>
          <path d="M2 15h10"></path>
          <path d="m9 18 3-3-3-3"></path>
        </svg>
        <h3 className="text-xl font-semibold mb-2">Upload your PDF</h3>
        <p className="text-black/60 mb-8 max-w-md">
          Drag and drop your PDF file here, or click the button below to browse
          your files
        </p>
        <label htmlFor="file-upload">
          <Button
            disabled={isLoading}
            className="bg-black hover:bg-black/80 text-white rounded-xl transition-all duration-300"
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            {isLoading ? "Processing..." : "Select PDF"}
          </Button>
          <input
            id="file-upload"
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}
