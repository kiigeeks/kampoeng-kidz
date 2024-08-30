/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {
            colors: {
                whitePrimary: '#F5FAFB',
                // redPrimary: '#F34141',
                // redSecondary: '#C94949',
                greenPrimary: '#57F287',
                greenSecondary: '#10C560',
                greenThird: '#165300',
                greenForth: '#52C234',
                bluePrimary: '#1C199A',
                blueSecondary: '#4179F3',
                // blueThird: '#4179F3',
                yellowPrimary: '#FFE417',
                // yellowSecondary: '#FFC535',
                // yellowThird: '#FF8108',
                // blackPrimary: '#3A3A3A',
                grayPrimary: '#B8C2DA',
                graySecondary: '#474741',
            },
            fontSize: {
                'xxs': '10px',
            },
            fontFamily: {
                inter: ['Inter'],
                roboto: ['Roboto', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

