// Stub client to replace base44 SDK dependency
// All base44 functionality has been removed
export const base44 = {
  auth: {
    me: async () => {
      // Return null user in offline mode
      return null;
    },
    logout: (redirectUrl) => {
      // Clear any local storage
      localStorage.clear();
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    },
    redirectToLogin: (redirectUrl) => {
      // Redirect to login (stub implementation)
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    }
  },
  appLogs: {
    logUserInApp: async (pageName) => {
      // Stub - silently succeed
      return Promise.resolve();
    }
  },
  integrations: {
    Core: {
      InvokeLLM: async () => Promise.reject(new Error('InvokeLLM not available')),
      SendEmail: async () => Promise.reject(new Error('SendEmail not available')),
      SendSMS: async () => Promise.reject(new Error('SendSMS not available')),
      UploadFile: async () => Promise.reject(new Error('UploadFile not available')),
      GenerateImage: async () => Promise.reject(new Error('GenerateImage not available')),
      ExtractDataFromUploadedFile: async () => Promise.reject(new Error('ExtractDataFromUploadedFile not available'))
    }
  },
  entities: {
    Query: {}
  }
};
