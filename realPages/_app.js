import App from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>Hi</div>
      <Component {...pageProps} />
    </>
  );
}
MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};

export default MyApp;
