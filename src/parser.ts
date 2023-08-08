import { Token } from "./tokenizer";

export type Program = void; // TODO:
export type Method = void; // TODO:
export type Statement = void; // TODO:
export type Expression = void; // TODO:

export class Parser {
  private filename: string;
  private tokens: Token[];

  constructor(filename: string, tokens: Token[]) {
    this.filename = filename;
    this.tokens = tokens;
  }

  parseProgram(): Program {
    // TODO:
  }

  parseMethod(): Method {
    // TODO:
  }

  parseStatement(): Statement {
    // TODO:
  }

  parseExporession(): Expression {
    // TODO:
  }
}
