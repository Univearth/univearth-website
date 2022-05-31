/* eslint-disable tailwindcss/classnames-order */
import Layout from '@/components/Layouts/Layout';
// eslint-disable-next-line import/order
import ReturnTopButton from '@/components/Button/Returntop';

const about = () => {
  return (
    <Layout>
      <main className="px-4 mx-auto mt-8 max-w-7xl">
        <div className="py-6 px-4 mx-auto max-w-7xl sm:py-12 sm:px-6">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide text-cyan-800 uppercase lg:mb-5">
              ABOUT US
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              私たちについて
            </p>

            <p className="mx-auto mt-5 text-sm max-w-5xl font-semibold leading-6  text-black md:mt-8 md:text-xl md:leading-9 lg:mt-10 ">
              自分に合った生き方をする。
              <br />
              その人らしく生きるとはどういうことか。
              <br />
              社会に貢献していくこと。
              <br /> 人生の主役は自分自身なのである。
              <br /> 遊びに行く前日、
              <br className="sm:hidden" /> ワクワクして眠れなかった経験はないだろうか。
              <br />
              仕事＝遊びになれば仕事の前日も
              <br className="sm:hidden" />
              ワクワクして眠れなくなるはず。
              <br /> ウェルカム公私混同。
              <br /> 働かなくていい。
              <br /> 毎日遊ぼう。
              <br /> みんな全力で遊べ。
            </p>
          </div>
        </div>
      </main>
      <div className="py-16 px-4 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <h2 className="mt-20 mb-12 text-3xl font-semibold text-left md:text-4xl lg:text-5xl">
          VAL<span className="text-cyan-800">U</span>ES
        </h2>
        <div className="grid grid-cols-2 font-semibold  md:text-lg lg:text-2xl">
          <h4 className="flex text-xs font-normal text-cyan-800  md:text-base">
            Become an expert.
          </h4>
          <h4 className="text-xs font-normal text-cyan-800 md:text-base">Act Before You Worry.</h4>
          <h3 className="flex my-2 text-zinc-900">専門家になろう。</h3>
          <h3 className="my-2 text-zinc-900">悩む前に行動しよう。</h3>
          <h4 className="text-xs font-normal text-cyan-800 md:text-base">
            Create a service that
            <br className="md:hidden" /> people love.
          </h4>
          <h4 className="text-xs font-normal text-cyan-800 md:text-base">Let’s grow together.</h4>
          <h3 className="my-2 text-zinc-900">
            愛されるサービス
            <br className="md:hidden" />
            を作ろう。
          </h3>
          <h3 className="my-2 text-zinc-900">共に成長しよう。</h3>
        </div>
        <h2 className="mt-20 mb-12 text-3xl font-semibold text-left md:text-4xl lg:text-5xl lg:mt-36">
          INFORMATION
        </h2>
        <div className="mt-6 md:mt-8 lg:mt-12   ">
          <table className="w-full text-base font-semibold  text-zinc-900 table-auto md:text-lg lg:text-xl ">
            <tbody>
              <tr className="py-2 px-4 border-b-2  md:leading-10 ">
                <td className="py-3 ">会社名</td>
                <td>Univearth Inc. （株式会社Univearth）</td>
              </tr>

              <tr className="py-2 px-4 leading-7 border-b-2 md:leading-10 ">
                <td className="py-3">設立</td>
                <td>2019年2月15日</td>
              </tr>
              <tr className="py-2 px-4 leading-7 border-b-2 md:leading-10 ">
                <td className="py-3 w-24 ">代表取締役 </td>
                <td>谷口 臨太朗</td>
              </tr>
              <tr className="py-2 px-4 leading-7 border-b-2 md:leading-10">
                <td className="py-3">資本金</td>
                <td>1300万円</td>
              </tr>
              <tr className="py-2 px-4 leading-7 border-b-2 md:leading-10">
                <td className="py-3">所在地</td>
                <td>
                  〒564-0052
                  <br className=" " />
                  大阪府吹田市広芝町10-8江坂董友ビル2F
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
      <div className=" absolute right-52">
        <ReturnTopButton />
      </div>
    </Layout>
  );
};

export default about;
