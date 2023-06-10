import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createDiary, deleteDiary, getAllDiaries, getDiary, updateDiary } from "../../apis/diary";

export const useDiaries = userId => {
  return useQuery(["diary", userId], () => getAllDiaries(userId));
};

export const useDiary = (userId, ms) => {
  const checkDiaryExistence = async () => {
    try {
      await getDiary(userId, ms);
      return true;
    } catch (error) {
      return false;
    }
  };

  const diaryExists = useQuery(["diaryExists", userId, ms], checkDiaryExistence);

  return useQuery(["diary", userId, ms], () => getDiary(userId, ms), {
    enabled: diaryExists.data === true,
  });
};

export const useCreateDiary = userId => {
  const queryClient = useQueryClient();

  return useMutation(data => createDiary(userId, data), {
    onSuccess: (_, { _id }) => {
      queryClient.invalidateQueries({ queryKey: ["diary"] });
      queryClient.invalidateQueries({ queryKey: ["diary", _id] });
    },
  });
};

export const useUpdateDiary = userId => {
  const queryClient = useQueryClient();

  return useMutation(({ date, data }) => updateDiary(userId, date, data), {
    onSuccess: (_, { _id }) => {
      queryClient.invalidateQueries({ queryKey: ["diary"] });
      queryClient.invalidateQueries({ queryKey: ["diary", _id] });
    },
  });
};

export const useDeleteDiary = userId => {
  const queryClient = useQueryClient();

  return useMutation(ms => deleteDiary(userId, ms), {
    onSuccess: () => {
      queryClient.invalidateQueries("diary");
    },
  });
};
