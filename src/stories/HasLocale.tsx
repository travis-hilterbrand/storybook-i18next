import { useTranslation } from "react-i18next";

interface HasLocaleProps {}
export const HasLocale = (props: HasLocaleProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <h3>HasLocale</h3>
      <label>{t("title")}</label>
    </div>
  );
};
