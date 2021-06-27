import '../style/index.scss';


export default function App({ Component, pageProps, err }) {
    return (

                        <Component {...pageProps} err={err} />

    );
}
