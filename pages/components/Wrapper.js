import React from 'react';
import Head from 'next/head';
const Wrapper = ({ title, children, classN }) => {
  return (
    <div className={classN}>
      <Head>
        <title>{title ? `${title} - The rF` : `The Reading Factory`}</title>
        <meta
          name="description"
          value="NGO aimed at bridging the gap of literacy in Ghana amoung Children of varoius backgrounds"
        />
        “how can I help to fight breast cancer” or “donate to breast cancer
        research.” “how can I help to fight breast cancer” or “donate to breast
        cancer research.”
        <meta
          name="keywords"
          value="how can I help to fight Illitracy, donate educational resources,NGO, children education"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default Wrapper;
