export interface EmployeeDetails{
    tableDetails: Employee[]
}
interface Employee{
    name: string,
    age: number,
    designation: string,
    salary: number,
    department: string,
    address:EmpAdds[],
}

interface EmpAdds{
    street: string,
    post: string,
    pin: number,
    district: string,
}


