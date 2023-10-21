export type PageColor = 'amber' | 'sky' | 'emerald' | 'violet' | 'rose' | 'slate';

export const useColorStore = defineStore('color', () => {
  const currentColor = ref<PageColor>('amber');

  return { currentColor };
});

