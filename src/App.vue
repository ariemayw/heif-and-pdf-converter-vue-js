<template>
  <div id="app">
    <header class="header">
      <h1>Document Converter</h1>
      <p>Convert your files easily and securely</p>
    </header>

    <main class="main-content">
      <div class="converter-container">
        <WordToPdfConverter />
        <HeifToJpgConverter />
      </div>
    </main>

    <footer class="footer">
      <p>&copy; 2026 Document Converter. Built with Vue.js & Node.js</p>
    </footer>
  </div>
</template>

<script>
import WordToPdfConverter from './views/WordToPdfConverter.vue'
import HeifToJpgConverter from './views/HeifToJpgConverter.vue'

export default {
  name: 'App',
  components: {
    WordToPdfConverter,
    HeifToJpgConverter
  }
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  text-align: center;
}

.header h1 {
  margin: 0 0 0.5rem 0;
  font-size: 2.5rem;
}

.header p {
  margin: 0;
  opacity: 0.9;
}

.main-content {
  flex: 1;
  padding: 2rem;
  background: #f5f7fa;
}

.converter-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.footer {
  background: #2d3748;
  color: white;
  padding: 1.5rem;
  text-align: center;
}

.footer p {
  margin: 0;
}

@media (max-width: 768px) {
  .converter-container {
    grid-template-columns: 1fr;
  }
  
  .header h1 {
    font-size: 1.8rem;
  }
}
</style>