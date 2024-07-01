module.exports = {
  testRunner: {
    $0: 'jest',
    args: {
      config: 'e2e/jest.config.js',
      _: ['e2e']
    }
  },
  apps: {
    "android.debug": {
      type: "android.apk",
      binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",
    }
  },
  devices: {
    "android.attached": {
      type: "android.attached",
      device: {
        adbName: "4f33555631433498"
      }
    }
  },
  configurations: {
    "confAndroidApp": {
      device: "android.attached",
      app: "android.debug",
      artifacts: {
        rootDir: "./e2e/artifacts",
        plugins: {
          video: {
            enabled: true,
            keepOnlyFailedTestsArtifacts: false
          }
        }
      }
    }
  }
};
