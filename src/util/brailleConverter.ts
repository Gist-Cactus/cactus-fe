const BRAILLE = {
  " ": " ",
  _: "⠸",
  "-": "⠤",
  ",": "⠠",
  ";": "⠰",
  ":": "⠱",
  "!": "⠮",
  "?": "⠹",
  ".": "⠨",
  "(": "⠷",
  "[": "⠪",
  "@": "⠈",
  "*": "⠡",
  "/": "⠌",
  "'": "⠄",
  '"': "⠐",
  "\\": "⠳",
  "&": "⠯",
  "%": "⠩",
  "^": "⠘",
  "+": "⠬",
  "<": "⠣",
  ">": "⠜",
  $: "⠫",
  "0": "⠴",
  "1": "⠂",
  "2": "⠆",
  "3": "⠒",
  "4": "⠲",
  "5": "⠢",
  "6": "⠖",
  "7": "⠶",
  "8": "⠦",
  "9": "⠔",
  A: "⠁",
  B: "⠃",
  C: "⠉",
  D: "⠙",
  E: "⠑",
  F: "⠋",
  G: "⠛",
  H: "⠓",
  I: "⠊",
  J: "⠚",
  K: "⠅",
  L: "⠇",
  M: "⠍",
  N: "⠝",
  O: "⠕",
  P: "⠏",
  Q: "⠟",
  R: "⠗",
  S: "⠎",
  T: "⠞",
  U: "⠥",
  V: "⠧",
  W: "⠺",
  X: "⠭",
  Z: "⠵",
  "]": "⠻",
  "#": "⠼",
  Y: "⠽",
  ")": "⠾",
  "=": "⠿",
};

type Braille = keyof typeof BRAILLE;

const convert = (char: string) => {
  if (!(char in BRAILLE)) return "?";

  return BRAILLE[char as Braille];
};

const brailleConverter = (text: string) => {
  const upperText = text.toUpperCase();
  const upperTextLength = upperText.length;
  let brailleText = "";

  for (let i = 0; i < upperTextLength; i++) {
    brailleText += convert(upperText[i]);
  }

  return brailleText;
};

export default brailleConverter;
