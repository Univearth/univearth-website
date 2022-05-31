import Hero from '@/components/heroSections/Hero';
import Information from '@/components/InformationSection/Information';
import Layout from '@/components/Layouts/Layout';
import News from '@/components/newsSection/News';
import Service from '@/components/serviceSection/Service';
// eslint-disable-next-line import/order
import ReturnTopButton from '@/components/Button/Returntop';

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Hero />
      <Service />
      <News />
      <Information />
      <div className=" absolute right-56">
        <ReturnTopButton />
      </div>
    </Layout>
  );
};

export default Home;
