
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface PDFViewerProps {
  file: File | null;
  onReset: () => void;
}

export function PDFViewer({ file, onReset }: PDFViewerProps) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
      
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [file]);

  if (!file || !pdfUrl) {
    return null;
  }

  return (
    <div className="w-full h-full flex flex-col bg-white/50 rounded-xl overflow-hidden border border-black/5 subtle-shadow">
      <div className="p-3 bg-black/5 border-b border-black/5 flex justify-between items-center">
        <div className="text-sm font-medium truncate max-w-[70%]">
          {file.name}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="text-black/70 hover:text-black hover:bg-black/5"
        >
          Change PDF
        </Button>
      </div>
      <div className="flex-1 min-h-0">
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          className="w-full h-full"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}
