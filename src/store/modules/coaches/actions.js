const projectURL = null;

export default {
  async registerCoach(context, payload) {
    // payload.id = new Date().toISOString();
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `${projectURL}coaches/${userId}.json?auth=${token}`,
      {
        method: 'PUT',
        body: JSON.stringify(payload)
      }
    );
    if (!response.ok) {
      const error = new Error('Failed to Register As a Coach');
      throw error;
    }

    context.commit('registerCoach', {
      ...payload,
      id: userId
    });
  },
  async loadCoaches(context, payload) {
    if (!context.getters.shouldUpdate && !payload.forceRefresh) {
      return;
    }
    const response = await fetch(`${projectURL}coaches.json`, {
      method: 'GET'
    });
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to Fetch Data');
      throw error;
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};
