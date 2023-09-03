import { Location } from "./locations"
import { keywordList, reservedList } from "./keywords"
import { punctuationList } from "./punctuation"

interface Identifier extends Location {
  type: "id",
  name: string
}

interface Keyword extends Location {
  type: "keyword",
  keyword: string
}

interface Punctuation extends Location {
  type: "punc",
  value: string
}

interface Literal extends Location {
  type: "lit",
  value: string
}

export type Token = Identifier | Keyword | Punctuation | Literal;

export class Tokenizer {
  private filename: string;
  private location: Location;
  private content: string;

  private result: Token[] | undefined = undefined;

  constructor(filename: string, location: Location, content: string) {
    this.filename = filename;
    this.location = location;
    this.content = content;
  }

  get tokens(): Token[] {
    if (this.result === undefined) {
      this.tokenize();
    }

    return (this.result === undefined) ? [] : this.result;
  }

  private tokenize() {
    // TODO
  }
}
