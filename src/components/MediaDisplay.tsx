'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Image from 'next/image';

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface MediaDisplayProps {
  type: 'pdf' | 'image';
  url: string;
  title?: string;
  width?: number;
  height?: number;
}

export default function MediaDisplay({ type, url, title, width = 600, height = 400 }: MediaDisplayProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState(false);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPdfError(false);
  }

  function onDocumentLoadError() {
    setPdfError(true);
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 rounded-xl shadow-lg w-full h-fit min-h-[400px]" style={{ background: '#23272f', border: '1px solid #353945' }}>
      {title && <h3 className="text-base font-semibold mb-1 text-center w-full text-neutral-100">{title}</h3>}
      
      {type === 'pdf' ? (
        <div className="w-full flex justify-center" style={{ maxWidth: '100%' }}>
          {pdfError ? (
            <iframe
              src={url}
              title={title || 'PDF'}
              style={{ width: '100%', maxWidth: 600, height: 400, borderRadius: 12, background: '#2d323c', border: '1px solid #353945' }}
            >
              This browser does not support PDFs. Please download the PDF to view it: <a href={url}>Download PDF</a>.
            </iframe>
          ) : (
            <div className="overflow-auto w-full flex flex-col items-center" style={{ maxWidth: 600, height: 400 }}>
              <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                className="w-full flex justify-center"
              >
                <Page
                  pageNumber={pageNumber}
                  width={Math.min(width, 600)}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
              {numPages && (
                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => setPageNumber(page => Math.max(1, page - 1))}
                    disabled={pageNumber <= 1}
                    className="px-4 py-2 text-white bg-blue-500 rounded disabled:bg-gray-300"
                  >
                    Previous
                  </button>
                  <span className="text-neutral-200">
                    Page {pageNumber} of {numPages}
                  </span>
                  <button
                    onClick={() => setPageNumber(page => Math.min(numPages, page + 1))}
                    disabled={pageNumber >= numPages}
                    className="px-4 py-2 text-white bg-blue-500 rounded disabled:bg-gray-300"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center rounded-xl w-full" style={{ background: '#2d323c', border: '1px solid #353945', padding: 12 }}>
          <Image
            src={url}
            alt={title || 'Image'}
            width={0}
            height={0}
            style={{ 
              width: 'auto', 
              height: 'auto', 
              maxWidth: '100%', 
              maxHeight: `${height}px`, 
              objectFit: 'contain' 
            }}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg"
            priority
          />
        </div>
      )}
    </div>
  );
} 