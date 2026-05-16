<template>
  <div class="converter-card">
    <h2>HEIF to JPG</h2>
    <p class="description">Convert your HEIF/HEIC images to JPG format</p>

    <div class="upload-area" :class="{ 'drag-over': isDragging }">
      <input
        type="file"
        ref="fileInput"
        @change="handleFileSelect"
        accept=".heif,.heic"
        class="file-input"
        id="heif-file"
      />
      <label for="heif-file" class="upload-label">
        <div class="upload-icon">🖼️</div>
        <p v-if="!file">Click to upload or drag and drop</p>
        <p v-else class="file-name">{{ file.name }}</p>
        <span class="file-hint">Supported: .heif, .heic (Max 10MB)</span>
      </label>
    </div>

    <button 
      @click="convertFile" 
      :disabled="!file || isLoading"
      class="convert-btn"
    >
      {{ isLoading ? 'Converting...' : 'Convert to JPG' }}
    </button>

    <div v-if="error" class="error-message">
      {{ error }}
    </div>

    <div v-if="downloadUrl" class="success-message">
      <p>✅ Conversion successful!</p>
      <a :href="downloadUrl" :download="downloadFileName" class="download-btn">
        Download JPG
      </a>
    </div>
  </div>
</template>

<script>
import { useFileConverter } from '../composables/useFileConverter'

export default {
  name: 'HeifToJpgConverter',
  setup() {
    const {
      file,
      isLoading,
      error,
      downloadUrl,
      downloadFileName,
      isDragging,
      handleFileSelect,
      convertFile
    } = useFileConverter('heif-to-jpg')

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
}
</script>

<style scoped>
.converter-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.converter-card h2 {
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.description {
  color: #718096;
  margin: 0 0 1.5rem 0;
}

.upload-area {
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s;
  margin-bottom: 1rem;
}

.upload-area.drag-over {
  border-color: #667eea;
  background: #f7fafc;
}

.file-input {
  display: none;
}

.upload-label {
  cursor: pointer;
  display: block;
}

.upload-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.upload-label p {
  margin: 0;
  color: #4a5568;
  font-weight: 500;
}

.file-name {
  color: #667eea !important;
  font-weight: 600 !important;
}

.file-hint {
  display: block;
  font-size: 0.875rem;
  color: #a0aec0;
  margin-top: 0.5rem;
}

.convert-btn {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.convert-btn:hover:not(:disabled) {
  transform: translateY(-2px);
}

.convert-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.error-message {
  margin-top: 1rem;
  padding: 1rem;
  background: #fed7d7;
  color: #c53030;
  border-radius: 8px;
}

.success-message {
  margin-top: 1rem;
  padding: 1rem;
  background: #c6f6d5;
  border-radius: 8px;
  text-align: center;
}

.success-message p {
  margin: 0 0 1rem 0;
  color: #2f855a;
  font-weight: 600;
}

.download-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #48bb78;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s;
}

.download-btn:hover {
  background: #38a169;
}
</style>