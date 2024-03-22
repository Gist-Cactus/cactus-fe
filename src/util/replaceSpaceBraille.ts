const replaceSpaceBraille = (str: string): string => {
  return str.replace(/\s/g, "%20");
};

export default replaceSpaceBraille;
