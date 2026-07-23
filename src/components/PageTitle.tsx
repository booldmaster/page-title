import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types";
import { classNames } from "../util/lang";
import { pathToRoot } from "../util/path";
import { i18n } from "../i18n";
import { joinSegments } from "../util/path";

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const locale = cfg?.locale ?? "en-US";
  const title = cfg?.pageTitle ?? i18n(locale).propertyDefaults.title;
  const baseDir = pathToRoot(fileData.slug!);
  const iconPath = joinSegments(baseDir, "/static/Logo.png");
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img class="Logo" src={iconPath} alt={title}/>
      </a>
    </h1>
  );
};

PageTitle.css = `
.page-title {
  margin: 0;
}
`;

export default (() => PageTitle) satisfies QuartzComponentConstructor;
