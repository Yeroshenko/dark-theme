document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.getElementById('switch')

  const componentDidMount = () => {
    const theme = window.localStorage.getItem('theme');
    const html = document.getElementsByTagName('html')[0];

    if (theme && theme === 'dark') {
      html.setAttribute('dark', 'true');
      switcher.checked = true
    } else {
      window.localStorage.setItem('theme', 'light');
    }
  }

  componentDidMount()

  const handleChangeTheme = () => {
    const html = document.getElementsByTagName('html')[0];
    const localStorage = window.localStorage;
    const theme = localStorage.getItem('theme');

    if (theme && theme === 'light') {
      localStorage.setItem('theme', 'dark');
      html.setAttribute('dark', 'true');
    } else {
      localStorage.setItem('theme', 'light');
      html.removeAttribute('dark');
    }
  }

  switcher.addEventListener('change', handleChangeTheme)

})