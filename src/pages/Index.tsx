import { QuizContainer } from '@/components/QuizContainer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pilot Career Roadmap Builder | AviationStart</title>
        <meta 
          name="description" 
          content="Build your personalized pilot career roadmap. Discover the best flight training path based on your goals, schedule, and budget." 
        />
      </Helmet>
      <QuizContainer />
    </>
  );
};

export default Index;
