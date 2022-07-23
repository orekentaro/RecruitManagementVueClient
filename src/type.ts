export interface JobSeeker {
  corr_person: String;
  gender: String;
  job_ads: String;
  job_id: String;
  memo: Memo[];
  name: String;
  phase: Phase;
  progress: Progress[];
  status: Result;
  title: String;
}

export interface Memo {
  create_time: BigInteger;
  memo: String;
  changer: String;
}

export interface Progress {
  corr_person: String;
  info: String;
  phase: Phase;
  result: Result;
  schedule: BigInteger;
}

export type Phase = "応募" | "一次面接" | "二次面接" | "内定" | "内定承諾"| "入社"| "辞退" | undefined
export type Result = "選考中" | "日程調整中" | "予定" | "実施" | "キャンセル"| "通過"| "不合格" | undefined

export interface LoginForm {
  email: string;
  password: string;
};