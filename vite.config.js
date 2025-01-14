import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'docs', // 빌드 결과를 docs 폴더에 저장
  },
  resolve: {
    alias: {
      '@': '/src', // @는 src 디렉토리를 의미합니다.
    }
  }
})
