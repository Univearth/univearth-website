import Layout from '@/components/Layouts/Layout';

const contact = () => {
  return (
    <Layout>
      <div className="overflow-hidden py-0 px-4 bg-white sm:px-6 lg:px-32">
        <div className="relative mx-auto ">
          <div className="bg-white">
            <div className="py-16 px-4 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-base font-semibold tracking-wide text-cyan-800 uppercase">
                  contact
                </h2>
                <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
                  お問い合わせ
                </p>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-500">
                  弊社に興味をお持ち頂きありがとうございます。
                  <br />
                  会社について、採用に関するご質問、ご相談は
                  以下の必要事項をご記入の上お問い合わせください。
                  <br />
                  後日、担当よりご連絡させていただきます。
                </p>
              </div>
            </div>
          </div>

          {/* <!-- form - start --> */}
          <form className="grid gap-4 mx-auto max-w-screen-md font-normal  sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="inline-block mb-2 text-sm font-semibold text-gray-800 sm:text-base">
                貴社名
              </label>
              <input
                name="company"
                placeholder="株式会社Univearth"
                className="py-2 px-3 w-full text-gray-800 bg-gray-100  border-4  border-gray-100 outline-none focus:ring ring-black transition duration-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="inline-block mb-2  text-sm font-semibold text-gray-800 sm:text-base">
                ご担当者名
              </label>
              <input
                name="first-name"
                placeholder="谷口　臨太朗"
                className="py-2 px-3 w-full text-gray-800 bg-gray-100 border-4  border-gray-100  outline-none focus:ring ring-black transition duration-100 "
              />
            </div>
            <div className="sm:col-span-2">
              <label className="inline-block mb-2 text-sm font-semibold text-gray-800 sm:text-base">
                メールアドレス
              </label>
              <input
                name="email"
                placeholder="example@univearth.co.jp"
                className="py-2 px-3 w-full text-gray-800 bg-gray-100   border-4  border-gray-100 outline-none focus:ring ring-black transition duration-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="inline-block mb-2 text-sm font-semibold text-gray-800 sm:text-base">
                日中に繋がりやすい電話番号
              </label>
              <input
                name="phone"
                placeholder="06-7878-5327"
                className="py-2 px-3 w-full text-gray-800 bg-gray-100 border-4  border-gray-100 outline-none focus:ring ring-black transition duration-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="inline-block mb-2 text-sm font-semibold text-gray-800 sm:text-base">
                お問い合わせ内容
              </label>
              <textarea
                name="message"
                className="py-2 px-3 w-full h-64 text-gray-800 bg-gray-100  border-4  border-gray-100 outline-none focus:ring ring-black transition duration-100"
              ></textarea>
            </div>
            <p className="text-xs text-gray-400">
              <a href="#" className=" underline transition duration-100">
                プライバシーポリシー
              </a>
              に同意の上でお問い合わせください。
            </p>{' '}
            <div className="text-right sm:col-span-2">
              <button
                type="button"
                className="w-full font-semibold text-black hover:text-white bg-white hover:bg-black rounded-none border-2  border-black hover:border-black duration-75 delay-75　"
              >
                <a className="inline-block py-0 px-2 text-sm leading-10 md:py-4  md:px-8 md:text-xl">
                  送信
                </a>
              </button>
            </div>
          </form>
          {/* <!-- form - end --> */}
        </div>
      </div>
    </Layout>
  );
};

export default contact;
