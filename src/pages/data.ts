import { GameMap } from "@models/GameMap.model";
import { Player } from "@models/Player.model";
import { getRandomId } from "@plugins/library";

export const mapDatas: GameMap[] = [
  {
    name: '펄',
    isDisabled: true
  },
  {
    name: '프랙처',
    isDisabled: true
  },
  {
    name: '브리즈',
    isDisabled: true
  },
  {
    name: '아이스박스',
    isDisabled: true
  },
  {
    name: '바인드',
    isDisabled: true
  },
  {
    name: '헤이븐',
    isDisabled: true
  },
  {
    name: '스플릿',
    isDisabled: true
  },
  {
    name: '어센트',
    isDisabled: true
  }
];

export const playerDatas: Player[] = [
  {
    id: getRandomId(),
    name: "강성주",
    nick: "owo",
    isDisabled: false,
  },
  {
    id: getRandomId(),
    name: "김민규",
    nick: "galmaege",
    isDisabled: false,
  },
  {
    id: getRandomId(),
    name: "김영현",
    nick: "푸른청춘",
    isDisabled: false,
  },
  {
    id: getRandomId(),
    name: "김창현",
    nick: "praux",
    isDisabled: false,
  },
  {
    id: getRandomId(),
    name: "김헌주",
    nick: "온 탕",
    isDisabled: false,
  },
  {
    id: getRandomId(),
    name: "박현진",
    nick: "즛토마요",
    isDisabled: false,
  },
  {
    id: getRandomId(),
    name: "서홍민",
    nick: "Gladius Judicci",
    isDisabled: false,
  },
  {
    id: getRandomId(),
    name: "신준하",
    nick: "Crunkey",
    isDisabled: false,
  },
  {
    id: getRandomId(),
    name: "안진우",
    nick: "인간조무사 지누",
    isDisabled: false,
  },
  {
    id: getRandomId(),
    name: "이석",
    nick: "전 음",
    isDisabled: false,
  },
  {
    id: getRandomId(),
    name: "이지민",
    nick: "쇠 철",
    isDisabled: false,
  },
  {
    id: getRandomId(),
    name: "이해준",
    nick: "해딱임",
    isDisabled: false,
  },
  {
    id: getRandomId(),
    name: "임채영",
    nick: "하데하데나",
    isDisabled: false,
  },
  {
    id: getRandomId(),
    name: "전제",
    nick: "카뿜리",
    isDisabled: false,
  },
  {
    id: getRandomId(),
    name: "정재성",
    nick: "정재성",
    isDisabled: false,
  },
  {
    id: getRandomId(),
    name: "정효민",
    nick: "810130",
    isDisabled: false,
  },
]