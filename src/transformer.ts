import * as ts from "typescript";

/** @internal */
export class ShaderTransformer {
  private context: ts.TransformationContext
  private checker: ts.TypeChecker

  constructor(context: ts.TransformationContext, checker: ts.TypeChecker) {
    this.context = context;
    this.checker = checker;
  }

  run(sf: ts.SourceFile): ts.Node {
    // TODO: implement
    console.log("hello world!");
    return sf;
  }
}

/** @internal */
export interface ShaderExpr {
  type: "expression"
}

/** @internal */
export interface ShaderStmt {
  type: "statement"
}

/** @internal */
export interface ShaderFunc {
  type: "function"
}

/** @internal */
export interface ShaderUniform {
  type: "uniform"
}
