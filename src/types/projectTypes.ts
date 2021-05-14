export interface IProject {
    id: string,
    name: string,
    status: string,
    employees: string[],
    revenue: number | null,
    expectedRevenue: number
}

