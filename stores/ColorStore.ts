export const useColorStore = defineStore('color', () => {
  const currentColor = ref('amber');

  return { currentColor };
});
