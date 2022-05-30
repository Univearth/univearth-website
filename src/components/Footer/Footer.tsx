const navigation = {
  main: [
    { name: '私たちについて', href: '#' },
    { name: '採用情報', href: '#' },
    { name: 'お知らせ', href: '#' },
    { name: '会社概要', href: '#' },
    { name: 'プライバシーポリシー', href: '/privacy' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="overflow-hidden py-12 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -my-2 -mx-5" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="py-2 px-5">
              <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-base text-center text-gray-400">
          &copy; 2020 Workflow, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
