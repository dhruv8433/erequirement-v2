const { httpAxios } = require("../httpAxios");

async function CreateSchedule(scheduleData, cartId) {
  const response = await httpAxios.post(`/schedule`, {
    date: scheduleData.date,
    time: scheduleData.time,
    cartId: cartId,
  });

  return response.data;
}

async function getSchedule(cartId) {
  const response = await httpAxios.get(`/schedule/${cartId}`);

  return response.data;
}

export { CreateSchedule, getSchedule };
