import { NextFunction, Request, Response } from 'express';
import { appointmentService, doctorService, userService } from '../services';
import { IExtendedAppointment } from '../interfaces';
import { customErrors, ErrorHandler } from '../errors';
import { ResponseStatusCodesEnum } from '../constants';

class AppointmentController {
  async createAppointment(req: Request, res: Response, next: NextFunction) {
    try {
      const {doctorId, userId, date} = req.body;
      const doctor = await doctorService.findById(doctorId);

      if (!doctor) {
        return next(new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND,
          customErrors.NOT_FOUND_DOCTOR.message));
      }

      const dateAppointments = doctor.appointmentsAccepted.filter(app => {
        const reservedTime = new Date(app.date).setHours(0, 0, 0, 0);
        console.log('*****',date, new Date(date));
        const newAppointmentTime = new Date(date).setHours(0, 0, 0, 0);

        return reservedTime === newAppointmentTime;
      });

      if (dateAppointments.length >= 3) {
        return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST,
          customErrors.BAD_REQUEST_TIME_RESERVED.message));
      }

      const user = await userService.findUserById(userId);

      if (!user) {
        return next(new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND,
          customErrors.NOT_FOUND_USER.message));
      }

      const appointment = await appointmentService.createAppointment({
        doctor: doctor._id, user: user._id, date
      });

      res.json(appointment);
    } catch (err) {
      next(err.message);
    }
  }

  async acceptAppointment(req: Request, res: Response, next: NextFunction) {
    try {
      const {appointmentId, accept} = req.body;
      const appointment = await appointmentService.findById(appointmentId) as IExtendedAppointment;

      if (!appointment) {
        return next(new ErrorHandler(ResponseStatusCodesEnum.NOT_FOUND,
          customErrors.NOT_FOUND_APPOINTMENT.message));
      }

      if (appointment.active) {
        return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST,
          customErrors.BAD_REQUEST_APPOINTMENT_ACTIVE.message));
      }

      const {doctor, user} = appointment;

      const reservedAppointments = await appointmentService.find({doctor, active: true});

      if (new Date(appointment.date).getTime() < new Date().getTime()) {
        return next(new Error('appointment has already passed'));
      }

      const dateAppointments = reservedAppointments.filter(app => {
        const reservedTime = new Date(app.date).setHours(0, 0, 0, 0);
        const newAppointmentTime = new Date(appointment.date).setHours(0, 0, 0, 0);

        return reservedTime === newAppointmentTime;
      });
      if (dateAppointments.length >= 3) {
        return next(new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST,
          customErrors.BAD_REQUEST_TIME_RESERVED.message));
      }

      if (accept) {
        doctor.appointmentsAccepted.push(appointment._id);
        user.appointments.push(appointment._id);

        await Promise.all([
          userService.updateById(user._id, {appointments: user.appointments}),
          appointmentService.updateById(appointment._id, {active: true}),
          doctorService.updateById(doctor._id, {appointmentsAccepted: doctor.appointmentsAccepted})
        ]);
      } else {
        await appointmentService.deleteById(appointment._id);
      }

      res.json('OK');
    } catch (err) {
      next(err.message);
    }
  }
}

export const appointmentController = new AppointmentController();
