import React, {useState} from 'react'
import { useEffect } from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
import { deleteEmployee } from '../services/EmployeeService'
const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])


    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    },[])

    function getAllEmployees(){
        listEmployees().then((response) =>{
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

function addNewEmployee(){

    navigator('/add-employee')
}

function updateEmployee(id){
    navigator(`/edit-employee/${id}`)
}

function removeEmployee(id){
    console.log(id);
    deleteEmployee(id).then((response) =>{
        getAllEmployees();
        
    }).catch(error => {
        console.error(error);
    })
}

  return (
    
    <div className='container text-center d-grid gap-2 d-md-block'>
        <br></br>
        <h2 className='text-center'>List Of Employees</h2>
        
        <table className='table table-striped table-bordered'>
            <thead className='table-dark'>
                <tr>
                    <th>EmployeeID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>EmailID</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                    style={{marginLeft:'10px'}}
                                    >Delete</button>
                            </td>

                        </tr>)
                }
            </tbody>
            <br></br>
            

        </table>
        <center>
                <button className='btn btn-primary d-grid gap-2 d-md-block' onClick={addNewEmployee}>Add Employee</button>
            </center>
    </div>
  )
}

export default ListEmployeeComponent