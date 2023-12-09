import React from 'react';
import { Footer, Navbar, Nft, Poap } from '../_components';
import Image from 'next/image';

const MyNftPage = () => {
  return (
    <div className="w-[100vw] bg-[linear-gradient(299deg,_#FFFCEA_0%,_#FFF8D4_0.01%,_#F8FCFF_100%)]">
      <div className="grid pt-[32px] gap-4">
        <div className="self-start place-self-center grid grid-flow-col gap-4">
          <Nft />
          <Nft />
          <Nft />
          <Nft />
        </div>{' '}
        <div className="self-start place-self-center grid grid-flow-col gap-4">
          <Nft />
          <Poap />
          <Nft />
          <Nft />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyNftPage;
