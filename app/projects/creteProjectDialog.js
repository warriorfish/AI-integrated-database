"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function CreateProjectDialog() {



    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus />
                    Create Project
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Project</DialogTitle>
                    <DialogDescription>
                        Create a new project by filling out the form below.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-2 py-4">
                    <div className="flex flex-col items-start">
                        <div>
                            <Label htmlFor="projectName" className="text-right">
                                Project Name
                            </Label>
                        </div>
                        <div className="w-full">
                            <Input id="projectName" className="col-span-3" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button>Create Project</Button>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    );
}