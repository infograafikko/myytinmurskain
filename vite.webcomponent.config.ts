import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path'

const rollupOptions = {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    output: {            
        //options match webpack template
        entryFileNames: process.env.SAVENAME,
        manualChunks: undefined,
        //use this option if cannot use type module in script tag
        format: 'iife'
      }
}


export default defineConfig(async ({command, mode}) => {

    const buildWebComponent = async () => {
        const resolvedPath = "./src/webcomponent/Myytinmurskain-webcomponent.ts"
        return {
        build: {
            outDir: './docs/webcomponents',
            emptyOutDir: false,
            rollupOptions: {
                ...rollupOptions, 
                input: resolvedPath
            }}
        }
    }
        
    
    return buildWebComponent(mode)
    
})