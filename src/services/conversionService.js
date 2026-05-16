import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

export const conversionService = {
  async convertFile(endpoint, file) {
    const formData = new FormData()
    formData.append('file', file)

    const response = await apiClient.post(`/convert/${endpoint}`, formData, {
      responseType: 'blob'
    })

    return response
  }
}