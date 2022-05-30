import Layout from '@/components/Layouts/Layout';

const about = () => {
  return (
    <Layout>
      <div className="py-16 px-4 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <p className="mt-14  text-sm  font-semibold tracking-wider sm:text-xl sm:leading-9">
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
      </div>
    </Layout>
  );
};

export default about;
