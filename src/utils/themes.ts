export interface ThemeTemplate {
  primary: string,
  backgroundColor: string,
  textColor: string,
  font: string,
  headerFont: string
}

export const Theme: Record<string, ThemeTemplate> = {
  DEFAULT: {
    primary: '#a0a0ff',
    backgroundColor: '#f6f6ff',
    textColor: '#0a0a0a',
    font: 'Roboto',
    headerFont: 'Lato'
  },
  RED: {
    primary: '#ffa0a0',
    backgroundColor: '#fff6f6',
    textColor: '#0a0a0a',
    font: 'Roboto',
    headerFont: 'Lato'
  }
};
