import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { QuestionMarkCircledIcon, Pencil2Icon } from "@radix-ui/react-icons";

export function AlertNewFeature() {
  return (
    <div className="bg-slate-200 border-2 ml-4 mt-2 rounded-md border-slate-500 text-xs inline-block align-middle p-2">
      <h3 className="font-bold italic">Heads up!</h3>
      <p>You can now create and calculate your own custom dosages!</p>
      <p>
        To do so, click on the{" "}
        <Pencil2Icon className="h-6 w-6 inline-block align-middle border-2 border-slate-300 rounded-md p-1" />{" "}
        icon!
      </p>
    </div>
  );
}