import linaria from '@linaria/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import reactSvgrPlugin from 'vite-plugin-svgr'

type Props = {
  mode: string
}

// https://vitejs.dev/config/
export default ({}: Props) => {
  return defineConfig({
    plugins: [
      react(),
      reactSvgrPlugin({
        include: '**/*.svg?react'
      }),
      linaria()
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url))
        }
      ],
      dedupe: ['react', 'react-dom']
    }
  })
}
