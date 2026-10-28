const labels = {
  en: ["ELORNA engineering portfolio", "Explore 3 interactive projects"],
  fa: ["نمونه‌کارهای فنی ELORNA", "مشاهدهٔ ۳ پروژهٔ تعاملی"],
  sv: ["ELORNAs tekniska projekt", "Utforska 3 interaktiva projekt"],
};

export default function ProjectShortcut({ language }: { language: keyof typeof labels }) {
  const [title, action] = labels[language];
  return (
    <nav className="project-shortcut" aria-label={title} dir={language === "fa" ? "rtl" : "ltr"}>
      <a href="/projects">
        <span>{title}</span>
        <strong>{action} <span aria-hidden="true">↗</span></strong>
      </a>
    </nav>
  );
}
