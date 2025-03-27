import { useState, useRef } from "react";
import Head from "next/head";
import Editor from "@/components/Editor";
import Preview from "@/components/Preview";
import Toolbar from "@/components/Toolbar";
import LogoUpload from "@/components/LogoUpload";

export default function Home() {
  const [title, setTitle] = useState("Breaking News Headline");
  const [fontSize, setFontSize] = useState(48);
  const [fontFamily, setFontFamily] = useState("serif");
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [logo, setLogo] = useState(null);
  const [logoSize, setLogoSize] = useState(100);
  const [logoPosition, setLogoPosition] = useState("left");
  const previewRef = useRef(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Newspaper Title Generator</title>
      </Head>

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Newspaper Title Generator
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Editor
              title={title}
              setTitle={setTitle}
              fontSize={fontSize}
              setFontSize={setFontSize}
              fontFamily={fontFamily}
              setFontFamily={setFontFamily}
              textColor={textColor}
              setTextColor={setTextColor}
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
            />

            <LogoUpload
              logo={logo}
              setLogo={setLogo}
              logoSize={logoSize}
              setLogoSize={setLogoSize}
              logoPosition={logoPosition}
              setLogoPosition={setLogoPosition}
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Preview
              ref={previewRef}
              title={title}
              fontSize={fontSize}
              fontFamily={fontFamily}
              textColor={textColor}
              backgroundColor={backgroundColor}
              logo={logo}
              logoSize={logoSize}
              logoPosition={logoPosition}
            />

            <Toolbar previewRef={previewRef} />
          </div>
        </div>
      </main>
    </div>
  );
}
