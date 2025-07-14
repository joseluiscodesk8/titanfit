import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

export const myTheme = createUnifiedTheme({
  // Base general del tema que incluye colores, formas, fuentes
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light, // Base clara

      // Color principal usado en headers, botones primarios como "CREATE"
      primary: {
        main: '#343b58', // Ej. botón "CREATE"
      },

      // Color secundario, botones secundarios u otros elementos destacados
      secondary: {
        main: '#565a6e', // Podría usarse en íconos o botones menos importantes
      },

      // Colores para estados específicos del sistema
      error: {
        main: '#8c4351', // Elementos en error (banners, iconos, etc.)
      },
      warning: {
        main: '#8f5e15', // Banners de advertencia
      },
      info: {
        main: '#34548a', // Banners informativos
      },
      success: {
        main: '#485e30', // Estados de éxito
      },

      // Colores del fondo
      background: {
        default: '#d5d6db', // Fondo general del contenido
        paper: '#d5d6db',   // Fondo de tarjetas/paneles como "All Resources"
      },

      // Colores para banners informativos
      banner: {
        info: '#34548a',
        error: '#8c4351',
        text: '#343b58',
        link: '#565a6e',
      },

      // Fondos para cada tipo de mensaje
      errorBackground: '#8c4351',
      warningBackground: '#8f5e15',
      infoBackground: '#343b58',

      // Estilos del sidebar (menú lateral izquierdo)
      navigation: {
        background: '#343b58', // Color de fondo del sidebar
        indicator: '#8f5e15',  // Línea izquierda indicadora del ítem activo
        color: '#d5d6db',      // Color de texto de los ítems del menú
        selectedColor: '#ffffff', // Color del texto del ítem activo
      },
    },
  }),

  // Página por defecto al renderizar (por ejemplo, "Home")
  defaultPageTheme: 'home',

  // Tipografía general
  fontFamily: 'Arial, Helvetica, sans-serif',

  // Colores del header según el tipo de página
  pageTheme: {
    home: genPageTheme({
      colors: ['#07818c', '#07daed'], // Fondo del header "My Company Catalog"
      shape: shapes.wave,
    }),
    documentation: genPageTheme({
      colors: ['#07818c', '#07daed'],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({
      colors: ['#07818c', '#07daed'],
      shape: shapes.round,
    }),
    service: genPageTheme({
      colors: ['#07818c', '#07daed'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#07818c', '#07daed'],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#07818c', '#07daed'],
      shape: shapes.wave,
    }),
    other: genPageTheme({
      colors: ['#07818c', '#07daed'],
      shape: shapes.wave,
    }),
    app: genPageTheme({
      colors: ['#07818c', '#07daed'],
      shape: shapes.wave,
    }),
    apis: genPageTheme({
      colors: ['#07818c', '#07daed'],
      shape: shapes.wave,
    }),
  },
});
