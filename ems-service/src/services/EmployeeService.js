
import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:2025/api/employees/list';

const REST_API_POST_BASE_URL = 'http://localhost:2025/api/employees/save';

const REST_API_GET_BASE_URL = 'http://localhost:2025/api/employees';

const REST_API_PUT_BASE_URL = 'http://localhost:2025/api/employees/update';

const REST_API_DELETE_BASE_URL = 'http://localhost:2025/api/employees/delete';

export const listEmployees = () => axios.get(REST_API_BASE_URL);
export const createmployee = (employee) => axios.post(REST_API_POST_BASE_URL, employee);
export const getEmployee = (employeeId) => axios.get(REST_API_GET_BASE_URL + '/' + employeeId);
export const updateEmployee = (employeeId, employee) => axios.put(REST_API_PUT_BASE_URL + '/' + employeeId, employee);
export const deleteEmployee = (employeeId) => axios.delete(REST_API_DELETE_BASE_URL + '/' + employeeId);
console.log(employeeId);
