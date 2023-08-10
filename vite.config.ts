import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: "/src/components"
      },
      {
        find: "@pages",
        replacement: "/src/pages"
      },
      {
        find: "@routes",
        replacement: "/src/routes"
      },
      {
        find: "@utils",
        replacement: "/src/utils"
      },
      {
        find: "@hooks",
        replacement: "/src/hooks"
      },
    ]
  }
})
