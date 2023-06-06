import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createDiary, getAllDiaries, getDiary } from "../../apis/diary";

export const useDiaries = userId => {
  return useQuery(["diaries", userId], () => getAllDiaries(userId));
};

export const useDiary = (userId, ms) => {
  const diaryExists = checkDiaryExistence(ms);

  return useQuery(["diary", userId, ms], () => getDiary(userId, ms), {
    enabled: !!diaryExists,
  });
};

const checkDiaryExistence = async ms => {
  const diaries = await getAllDiaries("test");
  const matchingDiary = diaries.find(diary => diary.date === ms);
  return matchingDiary || false;
};

export const useCreateDiary = userId => {
  const queryClient = useQueryClient();
  return useMutation(({ ...payloads }) => createDiary(userId, { ...payloads }), {
    onSuccess: () => {
      queryClient.invalidateQueries(["diary"]);
    },
  });
};
