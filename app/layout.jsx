import "@styles/global.css";

export const metadata = {
  title: "ai-prompts",
  description: "discover & share AI prompts"
};

import React from "react";

function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div ClassName="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}

export default layout;
