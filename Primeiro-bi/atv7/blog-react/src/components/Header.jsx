import Navigation from "./Navigation";

export default function Header({ tituloPrincipal }) {
  return (
    <header>
      <h1>{tituloPrincipal}</h1>
      <Navigation />
    </header>
  );
}
