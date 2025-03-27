import html2canvas from "html2canvas-pro";

export default function Toolbar({ previewRef }) {
  const downloadImage = async (format) => {
    if (!previewRef.current) return;

    const canvas = await html2canvas(previewRef.current, {
      backgroundColor: null,
      scale: 2,
    });

    const link = document.createElement("a");
    link.download = `newspaper-title.${format}`;
    link.href = canvas.toDataURL(`image/${format}`, 1.0);
    link.click();
  };

  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => downloadImage("png")}
        className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-400 focus:outline-none hover:cursor-pointer"
      >
        Download PNG
      </button>
      <button
        onClick={() => downloadImage("jpeg")}
        className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-400 focus:outline-none hover:cursor-pointer"
      >
        Download JPEG
      </button>
    </div>
  );
}
