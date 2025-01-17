import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qrCode from 'qrcode'
import os from 'os'


const generateQRCode = async (url) => {
  try {
    const qr = await qrCode.toString(url, { type: 'terminal' })  
    console.log(qr)
  } catch (err) {
    console.error('Error generating QR code:', err)
  }
}


const getLocalIP = () => {
  const interfaces = os.networkInterfaces()
  let localIP = 'localhost'

  for (const interfaceName in interfaces) {
    const interfaceDetails = interfaces[interfaceName]
    for (const details of interfaceDetails) {
      if (details.family === 'IPv4' && !details.internal) {
        localIP = details.address
        break
      }
    }
  }
  return localIP
}

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: '0.0.0.0', 
    port: 5173,  
    open: true,  
    async onListening() {
  
      const localIP = getLocalIP()
      const url = `http://${localIP}:5173/`  
      await generateQRCode(url)
    }
  },
})
