import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";
import { cn } from "@/common/lib/utils";

export default function Home() {
  const form = useForm();

  return (
    <div className="page">
      <div className="page-header container m-auto text-center">
        <h2 className="font-bold text-[#064059]">Sorğu</h2>
        <p className="text-[#0567A6]">Forumu doldurun və həkimə təqdim ediin.</p>
      </div>
      <Form {...form}>
        <form action="" className="form">
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
                  name="username"
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
                  name="username"
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
                  name="username"
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
                  name="username"
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
          <div className="main-form"></div>
        </form>
      </Form>
    </div>
  );
}
