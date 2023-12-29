import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.reservation_app',
  appName: 'reservation_app',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
