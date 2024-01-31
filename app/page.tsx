import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex gap-56 ">
      <Card header="Zdeněk Sojka"/>
      <Card header="About Me"/>
    </div>
  );
}
