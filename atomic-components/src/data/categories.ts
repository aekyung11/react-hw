export type Category = {
  group: string;
  name: string;
  key: string;
};

export type Categories = Category[];

export const categories: Categories = [
  {
    group: "프로그래밍",
    name: "프론트엔드",
    key: "front-end",
  },
  {
    group: "프로그래밍",
    name: "백엔드",
    key: "back-end",
  },
  { group: "프로그래밍", name: "리액트", key: "react" },
  {
    group: "프로그래밍",
    name: "풀스택",
    key: "full-stack",
  },
  {
    group: "프로그래밍",
    name: "알고리즘",
    key: "algorithms",
  },
  {
    group: "프로그래밍",
    name: "기초지식",
    key: "basics",
  },
  { group: "디자인", name: "UI디자인", key: "ui" },
  { group: "디자인", name: "UX디자인", key: "ux" },
  { group: "디자인", name: "UI • UX", key: "ui-ux" },
  {
    group: "데이터",
    name: "데이터분석",
    key: "data-analytics",
  },
  {
    group: "데이터",
    name: "통계분석",
    key: "statistics",
  },
  {
    group: "데이터",
    name: "시각화",
    key: "visualization",
  },
];
