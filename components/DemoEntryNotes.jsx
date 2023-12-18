import { Textarea } from "@/components/ui/textarea"
import { Label } from '@/components/ui/label';


const inputs = [
    {
      name: "health",
      label: "Health",
      value: `Health is my biggest winner this year. Last year I was the fattest I've ever been (220lbs), and had terrible eating & exercise habits. I was at a two in health. A 1 would be if I'm sick or have a disease, so last year was just a notch above that.This year I turned things around in August, and now am working out 6x a week and eating clean. I jumped from a 2 to a 4.`
    },
    {
      name: "work",
      label: "Work",
      value: `Work for me is about picking the right thing (project selection) to work on and THEN feeling like I'm making a lot of progress. I gave myself a 4.5/5, really happy with this.`
    },
    {
      name: "play",
      label: "Play",
      value: `Play is the stuff you do for fun. There is no goal. The reward is doing the activity itself. For me this is often working, but also other things (eg. reading, playing sports, watching basketball, etc.).`
    },
    {
      name: "love",
      label: "Love",
      value: `Love is a tough one - because it takes into account a whole bunch of relationships. I'm a son, brother, husband, father and friend. I noticed some slippage this year. I started getting "comfortable" at home, and not bringing my A-game like I did when I first met my wife. I subscribe to the belief that "if you do what you did at the beginning, there will never be an end" in relationships. So I gotta get back to that "first date shaan" on a regular basis.`
    },
    {
      name: "self_respect",
      label: "Self-Respect",
      value: `Self-Respect - This isn't from the book, I added this myself. I found that even if everything is going great on the surface, if I felt shitty about myself, then I felt shitty. How do I feel about myself? Do I like the person I'm becoming?`
    },
  ];

export default function DemoEntryNotes() {




    return (
        <div className='w-full px-6'>
            <div className='space-y-8 px-6 py-12 border shadow rounded-lg'>

                <h2 className='text-2xl font-bold'>Reflection:</h2>

                {
                    inputs.map(({ name, label, type }, idx) => (
                        <div key={name}>
                            <Label htmlFor={name} className="block text-sm font-medium text-gray-700">
                                {label}
                            </Label>
                            <div className="mt-1">
                                <Textarea
                                    id={name}
                                    name={name}
                                    rows={4}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="Enter your notes here..."
                                    defaultValue={inputs[idx].value}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}