export const useTheme = () => {
  const isDark = useState('theme-dark', () => true)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', isDark.value ? 'bbb-dark' : 'bbb-light')
      localStorage.setItem('bbb-theme', isDark.value ? 'dark' : 'light')
    }
  }

  const initTheme = () => {
    if (import.meta.client) {
      const stored = localStorage.getItem('bbb-theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = stored ? stored === 'dark' : prefersDark
      document.documentElement.setAttribute('data-theme', isDark.value ? 'bbb-dark' : 'bbb-light')
    }
  }

  return { isDark, toggleTheme, initTheme }
}
