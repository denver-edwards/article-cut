import { useState } from "react";

export default function LogoUpload({
  setLogo,
  logoSize,
  setLogoSize,
  logoPosition,
  setLogoPosition,
}) {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Logo Settings</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Logo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>

        {preview && (
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 border border-gray-300 rounded-md overflow-hidden">
              <img
                src={preview}
                alt="Logo preview"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Logo Size: {logoSize}px
              </label>
              <input
                type="range"
                min="50"
                max="200"
                value={logoSize}
                onChange={(e) => setLogoSize(parseInt(e.target.value))}
                className="w-full"
              />

              <label className="block text-sm font-medium text-gray-700 mt-2 mb-1">
                Logo Position
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={logoPosition}
                onChange={(e) => setLogoPosition(e.target.value)}
              >
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
