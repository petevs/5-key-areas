'use client'

import {  useForm } from "react-hook-form";
import { Slider } from "@/components/ui/slider";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

const inputs = [
  {
    name: "health",
    label: "Health",
  },
  {
    name: "work",
    label: "Work",
  },
  {
    name: "play",
    label: "Play",
  },
  {
    name: "love",
    label: "Love",
  },
  {
    name: "self_respect",
    label: "Self-Respect",
  },
];

export default function EntryForm() {

  const form = useForm({
    defaultValues: {
      health: 4,
      work: 4.5,
      play: 3,
      love: 3.5,
      self_respect: 4,
    },
  });

  return (
    <div className='lg:w-[32rem] w-full lg:p-0 p-6'>
        <Form {...form}>
            <form className="space-y-8 px-6 py-12 border shadow rounded-lg">

                {inputs.map(({ name, label, type }, idx) => (
                    <FormField
                        key={name}
                        control={form.control}
                        name={name}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <div className="flex justify-between items-center pb-4">
                                        <span>{label}</span>
                                        <span>{field.value} / 5</span>
                                    </div>
                                    </FormLabel>
                                    <FormControl>
                                        <Slider
                                            min={1}
                                            max={5}
                                            step={.5}
                                            value={[field.value]}
                                            onValueChange={([value]) => field.onChange(value)} 
                                            rangeClass='bg-blue-500'
                                            thumbClass='border-blue-500 focus-visible:ring-blue-500'
                                        />
                                    </FormControl>
                                </FormItem>
                        )}
                    />
                ))}
            </form>
        </Form>
    </div>
  );
}
