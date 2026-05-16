import { ref } from 'vue'
import { conversionService } from '../services/conversionService'

export function useFileConverter(endpoint) {
  const file = ref(null)
  const isLoading = ref(false)
  const error = ref(null)
  const downloadUrl = ref(null)
  const downloadFileName = ref('')
  const isDragging = ref(false)

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      file.value = selectedFile
      error.value = null
      downloadUrl.value = null
    }
  }

  const convertFile = async () => {
    if (!file.value) {
      error.value = 'Please select a file first'
      return
    }

    isLoading.value = true
    error.value = null
    downloadUrl.value = null

    try {
      const result = await conversionService.convertFile(endpoint, file.value)
      
      const blob = new Blob([result.data], { 
        type: result.headers['content-type'] 
      })
      downloadUrl.value = URL.createObjectURL(blob)
      
      const contentDisposition = result.headers['content-disposition']
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="(.+)"/)
        downloadFileName.value = filenameMatch ? filenameMatch[1] : 'converted-file'
      }
    } catch (err) {
      error.value = err.response?.data?.error || err.message || 'Conversion failed'
    } finally {
      isLoading.value = false
    }
  }

  return {
    file,
    isLoading,
    error,
    downloadUrl,
    downloadFileName,
    isDragging,
    handleFileSelect,
    convertFile
  }
}