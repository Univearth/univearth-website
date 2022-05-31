import Layout from '@/components/Layouts/Layout';

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

const NewsPage = () => {
  return (
    <Layout>
      <main className="px-4 mx-auto mt-8 max-w-7xl">
        <div className="py-6 px-4 mx-auto max-w-7xl sm:py-12 sm:px-6">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide text-cyan-800 uppercase lg:mb-5">
              News
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              お知らせ
            </p>
          </div>
          <div className="flex flex-col justify-center px-4  pb-20 text-center bg-white sm:px-6 lg:px-8 ">
            <div className="relative  max-w-lg divide-y divide-y-reverse divide-gray-200 lg:max-w-7xl">
              <div className="pt-10  mt-6">
                {posts.map((post) => (
                  <div key={post.title} className=" group py-6">
                    <p className="text-sm text-left text-cyan-800">
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
        </div>
      </main>
    </Layout>
  );
};

export default NewsPage;
