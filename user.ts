// AccountInfo
// CharInfo
// PlayerInfo

type AccountInfo = {
  id: number | string;
  name: string;
  email?: string; // com a interrogação fica opcional
};

const account: AccountInfo = {
  id: 123,
  name: "Daury",
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "ellendaury",
  level: 100,
};

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: "123",
  name: "Daury",
  nickname: "ellendaury",
  level: 100,
};
