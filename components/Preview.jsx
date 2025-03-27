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
      padding = { horizontal: 20, vertical: 20 },
      logoMargin = { horizontal: 10, vertical: 10 },
    },
    ref
  ) => {
    const logoStyle = {
      width: `${logoSize}px`,
      height: `${logoSize}px`,
      objectFit: "contain",
    };

    // Calculate logo margins based on position
    const getLogoMargin = () => {
      switch (logoPosition) {
        case "left":
          return {
            marginRight: `${logoMargin.horizontal}px`,
            marginTop: 0,
            marginBottom: 0,
          };
        case "right":
          return {
            marginLeft: `${logoMargin.horizontal}px`,
            marginTop: 0,
            marginBottom: 0,
          };
        case "top":
          return {
            marginBottom: `${logoMargin.vertical}px`,
            marginLeft: 0,
            marginRight: 0,
          };
        case "bottom":
          return {
            marginTop: `${logoMargin.vertical}px`,
            marginLeft: 0,
            marginRight: 0,
          };
        default:
          return {};
      }
    };

    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Preview</h2>
        <div
          ref={ref}
          className="border-2 border-gray-300 rounded-lg relative"
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
            padding: `${padding.vertical}px ${padding.horizontal}px`,
          }}
        >
          {logo && (logoPosition === "left" || logoPosition === "top") && (
            <img
              src={typeof logo === "string" ? logo : URL.createObjectURL(logo)}
              alt="Newspaper Logo"
              style={{
                ...logoStyle,
                ...getLogoMargin(),
              }}
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
              style={{
                ...logoStyle,
                ...getLogoMargin(),
              }}
            />
          )}
        </div>
      </div>
    );
  }
);

Preview.displayName = "Preview";

export default Preview;
