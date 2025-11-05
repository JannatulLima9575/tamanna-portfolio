import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import SkillSection from './components/SkillSection';

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      {/* <Testimonials></Testimonials> */}
      <Projects></Projects>
      <SkillSection></SkillSection>
      <Contact></Contact>
    </>
  );
}
