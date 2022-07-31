import * as request from 'supertest'
import { app } from '../app'
import { IAppointments, IDoctor, IUser } from "../interfaces";

let createdUsers: IUser[] = []
let createdDoctors: IDoctor[] = []
let createdAppointments: IAppointments[] = []

describe('User controller', () => {

  afterAll(async () => {
    await Promise.all([
        ...createdUsers.map((user => request(app).delete(`/users/${user._id}`))),
        ...createdDoctors.map(doctor => request(app).delete(`doctors/${doctor._id}`)),
        ...createdAppointments.map(appointment =>request(app).delete(`appointments/${appointment._id}`))
  ])}
    )

  test('creates user', async () => {
    const res = await request(app).post('/users/register').send({
      name: "testUser",
      email: "testUser@gmail.com",
      phone: "0000000"
    })

    expect(res.body._id).toBeTruthy()

    expect(res.status).toBe(200)

    createdUsers.push(res.body._id)
  })

  test('creates doctor', async () => {
    const res = await request(app).post('/doctors/register').send({
      name: "testDoctor",
      email: "testDoctor@gmail.com",
      phone: "0000000"
    })

    expect(res.body._id).toBeTruthy()
    expect(res.status).toBe(200)

    createdDoctors.push(res.body._id)
  })

  test('creates appointment', async () => {
    const {body: doctor} = await request(app).post('/doctors/register').send({
      name: "testDoctor1",
      email: "testDoctor1@gmail.com",
      phone: "111111111"
    })

    const {body: user} = await request(app).post('/users/register').send({
      name: "testUser1",
      email: "testUser1@gmail.com",
      phone: "111111111"
    })

    const res = await request(app).post('/appointments/reserve').send({
      userId: user._id,
      doctorId: doctor._id,
      date: "2022-08-05T14:48:00.000Z"
    })

    expect(res.body._id).toBeTruthy()
    expect(res.status).toBe(200)

    createdUsers.push(res.body.user)
    createdDoctors.push(res.body.doctor)
    createdAppointments.push(res.body._id)
  })

  // test('accept appointment', async () => {
  //   const {body: doctor} = await request(app).post('/doctors/register').send({
  //     name: "testDoctor2",
  //     email: "testDoctor2@gmail.com",
  //     phone: "2222222222"
  //   })
  //
  //   const {body: user} = await request(app).post('/users/register').send({
  //     name: "testUser2",
  //     email: "testUser2@gmail.com",
  //     phone: "2222222222"
  //   })
  //
  //   const {body: appointment} = await request(app).post('/appointments/reserve').send({
  //     userId: user._id,
  //     doctorId: doctor._id,
  //     date: "2022-08-05T14:48:00.000Z"
  //   })
  //
  //   const res = await request(app).patch('/appointments/confirm').send({
  //     appointmentId: appointment._id,
  //     accept: true,
  //   })
  //
  //   expect(res.status).toBe(200)
  //
  // })
})