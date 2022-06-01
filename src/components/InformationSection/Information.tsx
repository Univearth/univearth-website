const Information = () => {
  return (
    <div className="px-4 pt-8 pb-20 text-center" id="information">
      <div className="relative pb-12 mx-auto max-w-lg lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wide text-cyan-800 lg:mb-5">INFORMATION</h2>
        <p className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">会社概要</p>
      </div>
      <div className="flex justify-center mx-auto max-w-lg text-left lg:max-w-7xl">
        <table className="w-full font-extrabold tracking-wide lg:max-w-3xl">
          <tbody>
            <tr className="py-2 px-4 border-b  md:leading-10">
              <td className="py-3">会社名</td>
              <td>株式会社Univearth</td>
            </tr>

            <tr className="py-2 px-4 leading-7 border-b md:leading-10 ">
              <td className="py-3">設立</td>
              <td>2019年2月15日</td>
            </tr>
            <tr className="py-2 px-4 leading-7 border-b md:leading-10 ">
              <td className="py-3 w-24 ">代表取締役 </td>
              <td>谷口 臨太朗</td>
            </tr>
            <tr className="py-2 px-4 leading-7 border-b md:leading-10">
              <td className="py-3">資本金</td>
              <td>1300万円</td>
            </tr>
            <tr className="py-2 px-4 leading-7 border-b md:leading-10">
              <td className="py-3">所在地</td>
              <td>
                〒564-0052
                <br className=" " />
                大阪府吹田市広芝町10-8
              </td>
            </tr>
            <tr className="px-4 leading-7  border-b-2 md:leading-10">
              <td className="py-3 w-24 md:w-48">事業内容</td>
              <td className=""> アプリケーションの企画・開発・運営</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Information;
