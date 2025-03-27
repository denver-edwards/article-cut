import { useState } from "react";

export default function AdvancedSettings({
  padding,
  setPadding,
  logoMargin,
  setLogoMargin,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 border-t pt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <h3 className="font-medium text-gray-700">Advanced Settings</h3>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Content Padding
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Left/Right
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={padding.horizontal}
                  onChange={(e) =>
                    setPadding({
                      ...padding,
                      horizontal: parseInt(e.target.value),
                    })
                  }
                  className="w-full"
                />
                <span className="text-xs text-gray-500">
                  {padding.horizontal}px
                </span>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Top/Bottom
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={padding.vertical}
                  onChange={(e) =>
                    setPadding({
                      ...padding,
                      vertical: parseInt(e.target.value),
                    })
                  }
                  className="w-full"
                />
                <span className="text-xs text-gray-500">
                  {padding.vertical}px
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Logo Margins
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Horizontal
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={logoMargin.horizontal}
                  onChange={(e) =>
                    setLogoMargin({
                      ...logoMargin,
                      horizontal: parseInt(e.target.value),
                    })
                  }
                  className="w-full"
                />
                <span className="text-xs text-gray-500">
                  {logoMargin.horizontal}px
                </span>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Vertical
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={logoMargin.vertical}
                  onChange={(e) =>
                    setLogoMargin({
                      ...logoMargin,
                      vertical: parseInt(e.target.value),
                    })
                  }
                  className="w-full"
                />
                <span className="text-xs text-gray-500">
                  {logoMargin.vertical}px
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
