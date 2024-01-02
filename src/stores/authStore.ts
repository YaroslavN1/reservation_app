import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth-store', () => {
  const isLoggedIn = ref(true);

  return { isLoggedIn };
});
