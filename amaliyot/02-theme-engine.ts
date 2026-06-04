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

