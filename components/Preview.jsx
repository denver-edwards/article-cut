import { forwardRef } from "react";

const Preview = forwardRef(
  (
    {
      title,
      fontSize,
      fontFamily,
      textColor,
      backgroundColor,
      logo,
      logoSize,
      logoPosition,
    },
    ref
  ) => {
    const logoStyle = {
      width: `${logoSize}px`,
      height: `${logoSize}px`,
      objectFit: "contain",
    };

    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Preview</h2>
        <div
          ref={ref}
          className="p-8 border-2 border-gray-300 rounded-lg relative"
          style={{
            backgroundColor,
            minHeight: "300px",
            display: "flex",
            flexDirection:
              logoPosition === "top" || logoPosition === "bottom"
                ? "column"
                : "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {logo && (logoPosition === "left" || logoPosition === "top") && (
            <img
              src={typeof logo === "string" ? logo : URL.createObjectURL(logo)}
              alt="Newspaper Logo"
              style={logoStyle}
            />
          )}

          <h2
            style={{
              fontSize: `${fontSize}px`,
              fontFamily,
              color: textColor,
              fontWeight: "bold",
              textAlign: "center",
              margin: 0,
              flexGrow: 1,
            }}
          >
            {title}
          </h2>

          {logo && (logoPosition === "right" || logoPosition === "bottom") && (
            <img
              src={typeof logo === "string" ? logo : URL.createObjectURL(logo)}
              alt="Newspaper Logo"
              style={logoStyle}
            />
          )}
        </div>
      </div>
    );
  }
);

Preview.displayName = "Preview";

export default Preview;
