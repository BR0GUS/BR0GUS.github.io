/* eslint-disable react/no-unescaped-entities */
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex gap-56 ">
      <Card header="Zdeněk Sojka"></Card>
      <Card header="About Me">
        <p>
          Hello! I'm a high schooler on the cusp of turning 18, with my roots
          firmly planted in the Czech Republic. Born on April 17, 2005,
          programming is not just my passion but the essence of my thinking.
          Python is my weapon of choice – it's simple, yet powerful enough to
          breathe life into my creative solutions.
        </p>
        <p>
          Yet, there's another side to me – the thrill-seeker who thrives on
          parkour. Navigating obstacles with grace, I approach each leap and
          landing with the same focus and precision that I apply to my coding.
        </p>
        <p>
          As I gear up to graduate from 1. IT Gymnázium, my sights are set on an
          exciting fusion of the future and the far East – I'm Tokyo-bound,
          aiming to further my education and blossom into a full-time coding
          freelancer. Here's to crafting code and vaulting over life's physical
          and virtual challenges! 🌐🏃
        </p>
      </Card>
    </div>
  );
}
