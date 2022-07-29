export const customErrors = {
  //400
  BAD_REQUEST_USER_REGISTERED: {
    message: 'User is already registered',
    customCode: 4001
  },
  BAD_REQUEST_DOCTOR_REGISTERED: {
    message: 'Doctor is already registered',
    customCode: 4001
  },
  BAD_REQUEST_TIME_RESERVED: {
    message: 'This date is already reserved'
  },
  BAD_REQUEST_APPOINTMENT_ACTIVE: {
    message: 'Appointment is already active'
  },

  //403

  //404
  NOT_FOUND_DOCTOR: {
    message: 'Doctor not found'
  },
  NOT_FOUND_USER: {
    message: 'User not found'
  },
  NOT_FOUND_APPOINTMENT: {
    message: 'Appointment not found'
  }

};
