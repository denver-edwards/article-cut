import React, { useState, useEffect, useRef } from "react";
import { Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const useResizeText = (text, maxWidth, maxHeight) => {
  const [fontSize, setFontSize] = useState(16);
  const textRef = useRef(null);

  useEffect(() => {
    const resizeText = () => {
      if (!textRef.current) return;

      let size = 16;
      textRef.current.style.fontSize = `${size}px`;

      while (
        textRef.current.scrollWidth <= maxWidth &&
        textRef.current.scrollHeight <= maxHeight &&
        size < 100
      ) {
        size++;
        textRef.current.style.fontSize = `${size}px`;
      }

      while (
        (textRef.current.scrollWidth > maxWidth ||
          textRef.current.scrollHeight > maxHeight) &&
        size > 1
      ) {
        size--;
        textRef.current.style.fontSize = `${size}px`;
      }

      setFontSize(size);
    };

    resizeText();
  }, [text, maxWidth, maxHeight]);

  return { fontSize, textRef };
};

export default function Generator() {
  const [url, setUrl] = useState("");
  const [favicon, setFavicon] = useState("");
  const [headline, setHeadline] = useState("");
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(150);
  const [isLoading, setIsLoading] = useState(false);

  const { fontSize, textRef } = useResizeText(
    headline,
    width - 70,
    height - 20
  ); // Subtracting padding and favicon space

  useEffect(() => {
    const fetchFaviconAndHeadline = async () => {
      if (url) {
        setIsLoading(true);
        try {
          const response = await fetch("/api/get-favicon-headline", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ url }),
          });
          const data = await response.json();
          setFavicon(data.favicon);
          setHeadline(data.headline);
        } catch (error) {
          console.error("Error fetching favicon and headline:", error);
          setFavicon(`https://www.google.com/s2/favicons?domain=${url}`);
          setHeadline("Could not fetch headline for " + url);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchFaviconAndHeadline();
  }, [url]);

  const handleDownload = () => {
    // Implement download logic here
    console.log("Downloading image...");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Favicon Headline Generator</h1>
      <Input
        type="url"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="mb-4"
      />
      <div className="mb-4">
        <label className="block mb-2">Width: {width}px</label>
        <Slider
          value={[width]}
          onValueChange={(value) => setWidth(value[0])}
          min={200}
          max={600}
          step={10}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Height: {height}px</label>
        <Slider
          value={[height]}
          onValueChange={(value) => setHeight(value[0])}
          min={40}
          max={150}
          step={10}
        />
      </div>
      <div
        className="border p-4 mb-4 flex items-center"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          overflow: "hidden",
        }}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {favicon && (
              <img
                src={favicon}
                alt="Favicon"
                className="mr-4 flex-shrink-0"
                style={{ width: "50px", height: "50px", objectFit: "contain" }}
              />
            )}
            <h2
              ref={textRef}
              className="font-semibold m-0 p-0 leading-tight flex-grow"
              style={{
                fontSize: `${fontSize}px`,
                maxWidth: "calc(100% - 70px)",
                wordWrap: "break-word",
              }}
            >
              {headline}
            </h2>
          </>
        )}
      </div>
      <Button onClick={handleDownload} disabled={isLoading || !favicon}>
        <Download className="mr-2 h-4 w-4" /> Download Image
      </Button>
    </div>
  );
}
