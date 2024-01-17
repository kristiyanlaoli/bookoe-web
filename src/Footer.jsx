const Footer = () => {
  return (
    <>
      <div className="py-8 mx-4 xl:mx-24">
        <div className="flex flex-row">
          <div className="flex flex-wrap w-1/2">
            <img src="/img/header/logo.svg" alt="" className="mr-4" />
            <div className="flex-col my-auto">
              <h1 className="font-bold text-4xl text-black">Bookoe</h1>
              <p>Rekomendasi Bukumu</p>
            </div>
          </div>

          <p className="self-end w-1/2 text-right justify">
            Platform buku online menyajikan karya inspiratif dan beragam untuk
            penikmat literasi global. Jelajahi dan temukan pengetahuan baru!
          </p>
        </div>
      </div>
      <div className="pt-5 pb-5 border-t border-slate-300">
        <p className="font-medium text-sm text-slate-500 text-center">
          Dibuat dengan ❤️ oleh
          <span className="text-primary"> Kristiyan Laoli</span>.
        </p>
      </div>
    </>
  );
};

export default Footer;
