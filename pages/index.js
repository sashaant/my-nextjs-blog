import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content="test" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to my page!
        </h1>

        <p className={styles.description}>
          Hello, I’m <strong>Sasha</strong>. I’m a software engineer in Test and Developeper.<br/>
          Making imposible at JABRA_dk<br/>
          You can contact me on{' '}
          <a href="https://twitter.com/7antonenko">Twitter</a>.
        </p>

        <div className={styles.grid}>
          <a href="/posts/first-post" className={styles.card}>
            <h3>First post &rarr;</h3>
            {/* <p>Find in-depth information about Next.js features and API.</p> */}
            <p>Check the routiing to the first post page</p>
          </a>

          <a href="/posts/second-post" className={styles.card}>
            <h3>Second post &rarr;</h3>
            <p> Check the routiing to the second post page</p>
          </a>

          <a
            href="https://war.ukraine.ua/support-ukraine/"
            className={styles.card}
          >
            <h3>I'm standing with the Ukraine &#127482;&#127462; &rarr;</h3>
            <p>Find out how you can help.</p>
          </a>

       
        </div>
      </main>

      <footer>
          <div>
          Powered by Sasha Antonenko | 2023
          </div>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
