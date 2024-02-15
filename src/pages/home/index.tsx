import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";
import { cn } from "@/common/lib/utils";
import { defaultObjectStr as questions } from "@/common/static/data";
import { Checkbox } from "@/common/components/ui/checkbox";
import { Answer, PeopleResponse, PeopleResponseSchema, Question, QuestionType, Response } from "@/common/types";
import { Button } from "@/common/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Home() {
  const form = useForm<PeopleResponse>({ resolver: zodResolver(PeopleResponseSchema) });
  console.log("obj", form.watch());

  const onSubmit = (data: Response) => console.log(data);


  return (
    <div className="page">
      <div className="page-header container m-auto text-center">
        <h2 className="font-bold text-[#064059]">Sorğu</h2>
        <p className="text-[#0567A6]">Forumu doldurun və həkimə təqdim ediin.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="form">
          <div className="form-header-container w-full bg-[#F1F6F9B2] py-9">
            <div className="container m-auto">
              <div className="personal-info flex gap-[15px] flex-wrap">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className={cn("basis-[32%]")}>
                      <FormLabel>Ad</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="surname"
                  render={({ field }) => (
                    <FormItem className={cn("basis-[32%]")}>
                      <FormLabel>Soyad</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="current_date"
                  render={({ field }) => (
                    <FormItem className={cn("basis-[32%]")}>
                      <FormLabel>Tarix</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="birth_date"
                  render={({ field }) => (
                    <FormItem className={cn("basis-[32%]")}>
                      <FormLabel>Doğum tarixi:</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem className={cn("basis-[32%]")}>
                      <FormLabel>Yaş:</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="main-form container m-auto">
            {questions?.map((question: Question, idx: number) => {
              return question.type === QuestionType.Multiple ? (
                <FormField
                  control={form.control}
                  name="answers"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">
                          {idx}.{question.title}
                        </FormLabel>
                      </div>
                      {question.answers?.map((answer: Answer) => (
                        <FormField
                          key={answer.answer_id}
                          control={form.control}
                          name="answers"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={answer.answer_id}
                                className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field?.value?.includes(answer.answer_id)}
                                    onCheckedChange={(checked) => {
                                      const currentValues = field.value || [];
                                      if (checked) {
                                        field.onChange([...currentValues, answer.answer_id]);
                                      } else {
                                        field.onChange(currentValues.filter((value) => value !== answer.answer_id));
                                      }
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">{answer.answer_title}</FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : null;
            })}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
