async function api(endpoint, signal, { body }) {  

  const headers = { 'Content-Type': 'application/json' }

  const config = {
    method: body ? 'POST' : 'GET',
    headers: {
      ...headers
    },
    signal
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  let data

  try {
    const response = await fetch(endpoint, config)
    data = await response.json()

    if(response.ok) {
      return data
    }
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
}

api.get = function (endpoint) {
  return api(endpoint)
}

api.post = function (endpoint, signal, body) {
  return api(endpoint, signal, {body})
}

export default api;