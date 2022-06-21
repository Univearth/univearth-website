import ReturnTopButton from '@/components/Button/Returntop';
import Hero from '@/components/heroSections/Hero';
import Information from '@/components/InformationSection/Information';
import Layout from '@/components/Layouts/Layout';
import News from '@/components/newsSection/News';

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Hero />
      <News />
      <Information />
      <div className=" absolute right-56">
        <ReturnTopButton />
      </div>
    </Layout>
  );
};

export default Home;
