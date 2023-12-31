import * as transformers from "./transformer"
import * as ts from "typescript";
import * as THREE from "/type-three";

export interface QuasConfig {
  threeJsNS: string
}

export default (program: ts.Program, config?: QuasConfig): ts.TransformerFactory<ts.Node> => ctx => {
  const checker = program.getTypeChecker();
  const transformer = new transformers.ShaderTransformer(ctx, checker, (config)? config.threeJsNS : "THREE");
  return firstNode => {
    return transformer.run(firstNode as ts.SourceFile);
  }
}

export declare function $program(vet: string, frag: string): THREE.RawShaderMaterial;
export declare function $expr(expr: string): transformers.ShaderExpr;
export declare function $stmt(stmt: string): transformers.ShaderStmt;
export declare function $function(func: string): transformers.ShaderFunc;
export declare function $uniform(uni: string): transformers.ShaderUniform;
