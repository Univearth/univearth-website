import Hero from '@/components/heroSections/Hero';
import Information from '@/components/InformationSection/Information';
import Layout from '@/components/Layouts/Layout';
import News from '@/components/newsSection/News';
import Service from '@/components/serviceSection/Service';

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Hero />
      <Service />
      <News />
      <Information />
    </Layout>
  );
};

export default Home;
