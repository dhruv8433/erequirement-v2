import { useTranslations } from "next-intl";
import Categories from "../components/home/Categories";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div>
      {/* Categories */}
      <div className="my-4">
        <Categories />
      </div>
    </div>
  );
}
