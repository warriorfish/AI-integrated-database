import { DataTable, ProjectTable } from "@/components/custom/datatable";
import columns from "./columns";
import CreateProjectDialog from "./creteProjectDialog";


export default function Projects() {

    const data = [
        {
            projectIndex: 1,
            projectName: "Test project",
            projectStatus: "Active",
        },
        {
            projectIndex: 2,
            projectName: "Test project",
            projectStatus: "Active",
        },
        {
            projectIndex: 3,
            projectName: "Test project",
            projectStatus: "Active",
        },
    ];

    return (
        <div>
            <div className="flex justify-end mb-2 gap-2">
                <CreateProjectDialog />
            </div>
            <DataTable data={data} columns={columns} />

        </div>
    )
}