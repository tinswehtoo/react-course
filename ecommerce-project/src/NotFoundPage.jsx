import "./NotFoundPage.css";
import { Header } from "./components/Header";

export function NotFoundPage({ cart }) {
  return (
    <div className="Error">
      <Header cart={cart} />
      404 Not Found
    </div>
  );
}
