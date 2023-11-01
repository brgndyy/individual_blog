import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const formatDate = (createdAt: string) => {
  const now = dayjs();
  const createdDate = dayjs(createdAt);

  const diffInDays = now.diff(createdDate, "day");

  if (diffInDays < 1) {
    return "오늘";
  } else if (diffInDays >= 1 && diffInDays < 7) {
    return `${diffInDays}일 전`;
  } else if (diffInDays >= 7 && diffInDays < 30) {
    return "1주일 전";
  } else {
    return createdDate.format("YYYY년 MM월 DD일");
  }
};
