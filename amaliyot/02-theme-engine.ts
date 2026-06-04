export type ThemeMode = 'light' | 'dark' | 'system';

export class ThemeEngine {
  private currentTheme: ThemeMode = 'system';

  constructor(private storageKey: string = 'app-theme') {
    this.init();
  }

  private init() {
    const saved = localStorage.getItem(this.storageKey) as ThemeMode | null;
    this.setTheme(saved || 'system');
  }

  public setTheme(mode: ThemeMode) {
    this.currentTheme = mode;
    localStorage.setItem(this.storageKey, mode);

    const isDark =
      mode === 'dark' ||
      (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
