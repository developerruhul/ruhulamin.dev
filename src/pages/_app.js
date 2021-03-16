import dynamic from 'next/dynamic';
import Layout from './layout';
import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';
import './global.css';

const TopProgressBar = dynamic(
  () => {
    return import('../components/top-progress-bar');
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopProgressBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
