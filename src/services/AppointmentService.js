import tysClient from '../config/services/client';

const DEFAULT_QUERY = '/api';

class AppointmentService {
  addAppointment = payload =>
    tysClient.post(`${DEFAULT_QUERY}/addAppointment`, payload).then(res => {
      // localStorage.setItem('user_id', res.data.userId);
      return res;
    });

  getAppointmentsData = () => tysClient.get(`${DEFAULT_QUERY}/getAppointmentsData`);
}

export default AppointmentService;
