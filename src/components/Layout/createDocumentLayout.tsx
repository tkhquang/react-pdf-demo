import React from "react";
import { Document, Page, View } from "@react-pdf/renderer";
import { COLORS } from "@/contants";

type CreateDocumentLayoutOptions = {
  leftPanel: React.ComponentType;
  rightPanel: React.ComponentType;
};

function createDocumentLayout({
  leftPanel: LeftPanel,
  rightPanel: RightPanel,
}: CreateDocumentLayoutOptions) {
  const MyDocument = () => (
    <Document>
      <Page
        size="A4"
        style={{
          fontFamily: "Montserrat",
          lineHeight: "1.5",
          flexDirection: "row",
          color: COLORS.onBackground,
          backgroundColor: COLORS.background,
        }}
      >
        <View
          style={{
            padding: "40px 10px",
            width: `${100 / 3}%`,
            color: COLORS.onSurface,
            backgroundColor: COLORS.surface,
          }}
        >
          <LeftPanel />
        </View>
        <View
          style={{
            padding: "40px 10px",
            width: `${(100 / 3) * 2}%`,
            color: COLORS.onBackground,
            backgroundColor: COLORS.background,
          }}
        >
          <RightPanel />
        </View>
      </Page>
    </Document>
  );

  return MyDocument;
}

export default createDocumentLayout;
