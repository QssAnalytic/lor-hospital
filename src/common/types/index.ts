import { z } from "zod";

enum QuestionType {
  Multiple = "multiple",
  Single = "single",
}

interface Answer {
  answer_title: string;
  answer_id: number;
}

interface Question {
  title: string;
  answers: Answer[];
  type: string;
  id: number;
}

type Response = {
  age: string;
  username: string;
  surname: string;
  birth_date: string;
  current_date: string;
  answers: number[];
};

const PeopleResponseSchema = z.object({
  username: z.string({ required_error: "Name field cannot be empty" }),
  surname: z.string({ required_error: "Surname field cannot be empty" }),
  birth_date: z.string({ required_error: "Date field cannot be empty" }),
  current_date: z.string({ required_error: "Current date field cannot be empty" }),
  age: z.string({}),
  answers: z.array(z.number()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

type PeopleResponse = z.infer<typeof PeopleResponseSchema>;

export type { Answer, Question, Response, PeopleResponse };
export { PeopleResponseSchema, QuestionType };
