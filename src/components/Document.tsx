import { Font } from "@react-pdf/renderer";

import { createDocumentLayout } from "@/components/Layout";
import { LeftPanel } from "@/components/LeftPanel";
import { RightPanel } from "@/components/RightPanel";

import Montserrat from "@/assets/fonts/Montserrat-Regular.ttf";
import MontserratItalic from "@/assets/fonts/Montserrat-Italic.ttf";
import MontserratBold from "@/assets/fonts/Montserrat-Bold.ttf";
import MontserratSemiBold from "@/assets/fonts/Montserrat-SemiBold.ttf";

// Register font
Font.register({
  family: "Montserrat",
  src: Montserrat,
  fonts: [
    {
      src: Montserrat,
    },
    {
      src: MontserratItalic,
      fontStyle: "italic",
    },
    {
      src: MontserratSemiBold,
      fontWeight: 700,
    },
    {
      src: MontserratBold,
      fontWeight: 900,
    },
  ],
});

// Disable hyphenate words
const hyphenationCallback = (word: string) => {
  return [word];
};

Font.registerHyphenationCallback(hyphenationCallback);

const Document = createDocumentLayout({
  leftPanel: LeftPanel,
  rightPanel: RightPanel,
});

export default Document;
