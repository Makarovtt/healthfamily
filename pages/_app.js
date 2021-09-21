import '../styles/fonts.scss';
import '../styles/globals.scss';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import "swiper/components/effect-flip/effect-flip.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/thumbs/thumbs.min.css"

import '../styles/swiperGlobal.scss';
import NextNprogress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';


const theme = {
  colors: {
    primary: '#841f65',

  },

}




export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <NextNprogress
        color="#ffd138"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
        options={{ easing: 'ease', speed: 500 }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
