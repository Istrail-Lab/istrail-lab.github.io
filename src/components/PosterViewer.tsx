import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PosterViewerProps {
    posterPath: string;
}

const PosterViewer = ({ posterPath }: PosterViewerProps) => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <Document
            file={posterPath}
            onLoadSuccess={(e) => setNumPages(e.numPages)}
            onLoadError={(error) =>
                console.error("Error while loading document! " + error.message)
            }
        >
            <Page pageNumber={pageNumber} />
        </Document>
    );
};

export default PosterViewer;
