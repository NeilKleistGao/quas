// @see https://registry.khronos.org/OpenGL/specs/es/2.0/GLSL_ES_Specification_1.00.pdf

export const punctuationList = [
  "(", ")", "[", "]", ".", "++", "--",
  "+", "-", "~", "!",
  "*", "/", "%",
  "<<", ">>", "<", ">", "<=", ">=",
  "==", "!=", "&", "^", "|",
  "&&", "^^", "||", "?", ":",
  "=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=",
  "&=", "^=", "|=", ",", ";"
];

export const operatorPriority = {
  "++": {
    "post": 2,
    "pref": 3
  },
  "--": {
    "post": 2,
    "pref": 3
  },
  "~": 3, "!": 3,
  "*": 4, "/": 4, "%": 4,
  "+": {
    "unary": 3,
    "binary": 5
  },
  "-": {
    "unary": 3,
    "binary": 5
  },
  "<<": 6, ">>": 6,
  "<": 7, ">": 7, "<=": 7, ">=": 7,
  "==": 8, "!=": 8,
  "&": 9, "^": 10, "|": 11,
  "&&": 12, "^^": 13, "||": 14,
  "?:": 15,
  "=": 16, "+=": 16, "-=": 16, "*=": 16, "/=": 16, "%=": 16, "<<=": 16, ">>=": 16,
  "&=": 16, "^=": 16, "|=": 16
};
