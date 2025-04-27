import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mandarinjourney.app',
  appName: 'Mandarin Journey Unlocked',
  webDir: 'dist',
  server: {
    url: 'http://localhost:3000',
    cleartext: true,
  },
  plugins: {
    // Configure any Capacitor plugins here
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystorePassword: undefined,
      keystoreAlias: undefined,
      keystoreAliasPassword: undefined,
    }
  },
  ios: {
    contentInset: 'always',
    allowsLinkPreview: true,
    scrollEnabled: true
  }
};

export default config;
