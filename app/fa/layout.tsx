import "./fa-fixes.css";

export default function PersianLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="fa-route" lang="fa" dir="rtl">{children}</div>;
}
