const projectURL = null;

export default {
  async contactCoach(context, payload) {
    const response = await fetch(
      `${projectURL}requests/${payload.coachId}.json`,
      { method: 'POST', body: JSON.stringify(payload) }
    );

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send the request.'
      );
      throw error;
    }
    const responseData = await response.json();

    // console.log(responseData);

    payload.id = responseData.name;

    context.commit('addRequest', payload);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;

    const response = await fetch(
      `${projectURL}requests/${coachId}.json?auth=${token}`
    );

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch the request.'
      );
      throw error;
    }
    const responseData = await response.json();

    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        email: responseData[key].email,
        message: responseData[key].message
      };
      requests.push(request);
    }
    context.commit('setRequest', requests);
  }
};
