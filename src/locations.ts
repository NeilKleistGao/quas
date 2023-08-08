export interface Position {
  line: number,
  col: number
}

export interface Location {
  begin: Position,
  end: Position
}
