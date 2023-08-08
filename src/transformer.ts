import * as ts from "typescript";

/** @internal */
export class ShaderTransformer {
  private context: ts.TransformationContext;
  private checker: ts.TypeChecker;
  private visitor: ts.Visitor;
  private threeJsNS: string;

  constructor(context: ts.TransformationContext, checker: ts.TypeChecker, threeJS: string) {
    this.context = context;
    this.checker = checker;
    this.threeJsNS = threeJS;
    this.visitor = this.visit.bind(this);
  }

  run(sf: ts.SourceFile): ts.Node {
    if (sf.isDeclarationFile) return sf;
    const statements: ts.Statement[] = [];
    for (const stmt of sf.statements) {
      if (ts.isImportDeclaration(stmt) && stmt.importClause && !stmt.importClause.isTypeOnly) {
        if (stmt.importClause.namedBindings && ts.isNamedImports(stmt.importClause.namedBindings)) {
          const keep = stmt.importClause.namedBindings.elements.reduce((res, imp) => {
            if (imp.isTypeOnly) return res;
            else {
              const sym = imp.name.escapedText.toString();
              if (this.isQuasName(sym)) {
                return false;
              }
              return res;
            }
          }, true);

          if (!keep) {
            continue;
          }
        }
      }

      const res = this.visit(stmt) as Array<ts.Statement> | ts.Statement | undefined;
      if (res !== undefined) {
        if (Array.isArray(res)) {
          statements.push(...res);
        }
        else {
          statements.push(res);
        }
      }
    }

    return ts.factory.updateSourceFile(sf, statements);
  }

  private visit(node: ts.Node): ts.VisitResult<ts.Node | undefined> {
    if (ts.isCallExpression(node)) {
      const callee = node.expression;
      if (ts.isIdentifier(callee)) {
        const name = callee.escapedText.toString();
        if (name === "$program") {
          // TODO: type check
          return ts.factory.createNewExpression( // TODO: add configurations
            ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier("THREE"), ts.factory.createIdentifier("RawShaderMaterial")),
            node.typeArguments, node.arguments
          );
        }

        // TODO: other macros
      }
    }

    return ts.visitEachChild(node, this.visitor, this.context);
  }

  private isQuasName(name: string) {
    return (name === "$program" || name === "$expr" || name === "$stmt" || name === "$function" || name === "$uniform");
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
