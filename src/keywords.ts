// @see https://registry.khronos.org/OpenGL/specs/es/2.0/GLSL_ES_Specification_1.00.pdf

export const keywordList = [
  "attribute", "const", "uniform", "varying",
  "break", "continue", "do", "for", "while",
  "if", "else",
  "in", "out", "inout",
  "float", "int", "void", "bool", "true", "false",
  "lowp", "mediump", "highp", "precision", "invariant",
  "discard", "return",
  "mat2", "mat3", "mat4",
  "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3", "bvec4",
  "sampler2D", "samplerCube",
  "struct"
];

export const reservedList = [
  "asm",
  "class", "union", "enum", "typedef", "template", "this", "packed",
  "goto", "switch", "default",
  "inline", "noinline", "volatile", "public", "static", "extern", "external", "interface", "flat",
  "long", "short", "double", "half", "fixed", "unsigned", "superp",
  "input", "output",
  "hvec2", "hvec3", "hvec4", "dvec2", "dvec3", "dvec4", "fvec2", "fvec3", "fvec4",
  "sampler1D", "sampler3D",
  "sampler1DShadow", "sampler2DShadow",
  "sampler2DRect", "sampler3DRect", "sampler2DRectShadow",
  "sizeof", "cast",
  "namespace", "using"
];
