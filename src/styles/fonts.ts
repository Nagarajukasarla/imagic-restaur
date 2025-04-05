// Font family definitions
export const fontFamilies = {
    heading: '"SF Pro Bold", -apple-system, BlinkMacSystemFont, sans-serif',
    medium: '"SF Pro Medium", -apple-system, BlinkMacSystemFont, sans-serif',
    primary: '"SF Pro Regular", -apple-system, BlinkMacSystemFont, sans-serif',
    display: '"Product Sans Infanity", -apple-system, BlinkMacSystemFont, sans-serif',
    display2: '"Benyoritha", -apple-system, BlinkMacSystemFont, sans-serif',
} as const;

// Font weights
export const fontWeights = {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
} as const;

// Font sizes with responsive variants
export const fontSizes = {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.25rem" }],
    base: ["1rem", { lineHeight: "1.5rem" }],
    lg: ["1.125rem", { lineHeight: "1.75rem" }],
    xl: ["1.25rem", { lineHeight: "1.75rem" }],
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
} as const;
