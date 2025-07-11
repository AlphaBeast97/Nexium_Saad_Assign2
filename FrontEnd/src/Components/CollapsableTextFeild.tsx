"use client"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/Components/ui/collapsible";
import { Button } from "@/Components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function CollapsibleBlogText({ text }: { text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold mb-3 border-b pb-2">
          Full Blog Text
        </h3>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="ml-2">
            {open ? (
              <>
                Hide <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                Show <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent>
        <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
          {text || "No full blog text available."}
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}
