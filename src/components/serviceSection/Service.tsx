import Image from "next/image";

const Service = () => {
  return (
    <div className="overflow-hidden relative pt-16 sm:pt-24 lg:py-32">
      <div className="px-4 mx-auto max-w-md text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-cyan-800 uppercase">
            SERVICE
          </h2>
          <p className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Logicos（自動案件検索サービス）
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-base text-center text-gray-500 lg:text-lg">
            Logicosはクラウド型案件自動検索サービスです。
            <br /> あらかじめ設定しておいた希望条件を基に、
            <br />
            あらゆる求荷サービスの検索作業を自動化することで業務効率を図ります。
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
          <Image
            className="rounded-lg ring-1 ring-black  shadow-xl"
            src="/images/service-image01.jpg"
            alt=""
            width='1000'
            height='700'
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
