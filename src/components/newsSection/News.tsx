const posts = [
  {
    title: 'プレシードラウンドにて5,000万円の資金調達を実施。',
    href: '#',
    datetime: '2020-03-16',
  },
  {
    title: '案件自動検索サービス「Logicos（ロジコス）」、ベータ版をリリースしました',
    href: '#',
    datetime: '2020-03-16',
  },
];

const News = () => {
  return (
    <div className="flex flex-col justify-center px-4 pt-32 pb-20 text-center bg-white sm:px-6 lg:px-8 lg:pt-32 lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wide text-cyan-800 lg:mb-5">NEWS</h2>
          <p className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            お知らせ
          </p>
        </div>
        <div className="pt-10 mx-auto mt-6">
          {posts.map((post) => (
            <div key={post.title} className="py-6">
              <p className="text-sm text-left text-gray-500">
                <time dateTime={post.datetime}>{post.datetime}</time>
              </p>
              <a href="#" className="block mt-2 text-left">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
