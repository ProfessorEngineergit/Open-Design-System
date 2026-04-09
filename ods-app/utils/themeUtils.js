export function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

export const themes = {
    dark: {
        '--background-color': '#121212',
        '--text-color': '#e0e0e0',
        '--primary-color': '#bb86fc',
        '--secondary-color': '#3700b3',
    },
    light: {
        '--background-color': '#ffffff',
        '--text-color': '#000000',
        '--primary-color': '#6200ee',
        '--secondary-color': '#3700b3',
    },
    hacker: {
        '--background-color': '#0f0f0f',
        '--text-color': '#00ff00',
        '--primary-color': '#39ff14',
        '--secondary-color': '#00cc00',
    },
};