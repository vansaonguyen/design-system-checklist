import React from "react";
import Head from "next/head";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";
import Header from "../Header";
import Footer from "../Footer";
import s from "./Layout.module.css";

const Layout = ({ t, children }) => {
  const { pathname, locale } = useRouter();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isVietnamese = locale === "vi";

  return (
    <>
      {isVietnamese && (
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <style>{`
            body, button, input, select, textarea, span, a {
              font-family: 'Be Vietnam Pro', sans-serif !important;
            }
          `}</style>
        </Head>
      )}

      <Header t={t} />
      <TransitionGroup>
        {mounted && (
          <CSSTransition
            key={pathname}
            timeout={{ enter: 600, exit: 0 }}
            classNames="fade"
          >
            <div className={s.container}>
              <div className={s.content}>{children}</div>
              <Footer t={t} />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
};

export default Layout;
