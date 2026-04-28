import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://trucktive.runasp.net/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth related APIs
export const authAPI = {
  login: (credentials: any) => api.post('/Auth/login', credentials),
};

// Supervisor APIs
export const supervisorAPI = {
  getSupervisor: (supervisorId: string, companyId: string) => 
    api.get(`/Supervisors/${supervisorId}?companyId=${companyId}`),
};

// Driver APIs
export const driverAPI = {
  getDrivers: (companyId: string) => api.get(`/Drivers?CompanyId=${companyId}`),
  addDriver: (driverData: any) => api.post('/Drivers', driverData),
  updateDriver: (id: string, driverData: any) => api.put(`/Drivers/${id}`, driverData),
  deleteDriver: (id: string) => api.delete(`/Drivers/${id}`),
};

// Vehicle APIs
export const vehicleAPI = {
  getVehicles: (companyId: string) => api.get(`/Vehicles?CompanyId=${companyId}`),
  addVehicle: (vehicleData: any) => api.post('/Vehicles', vehicleData),
  deleteVehicle: (id: string) => api.delete(`/Vehicles/${id}`),
  getVehicleCondition: (vehicleId: string) => api.get(`/Vehicles/${vehicleId}/condition`),
};

// Company APIs
export const companyAPI = {
  getCompanies: () => api.get('/Companies'),
  addCompany: (companyData: any) => api.post('/Companies', companyData),
  updateCompany: (id: string, companyData: any) => api.put(`/Companies/${id}`, companyData),
};

export default api;
