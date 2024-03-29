module.exports = {
    content: ["./**/*.{razor,html,cshtml}"],
    theme: {

        screens: {
            sm: '375px',
            md: '768px',
            lg: '1024px',
            xl: '1440px'
        },
        fontFamily: {
            'sans': ['"Open Sans"']
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem'
        },
        extend: {
            colors: {

            },
            padding: {
                '4.5': '1.125rem'
            },
            spacing: {
                '3.25': '13px'
            }
        },
    },
    important: true,
    plugins: [
    ]
}