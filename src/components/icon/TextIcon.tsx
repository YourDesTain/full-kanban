import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

export const TextIconSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M13 6l-5 5V4h3l2 2zm3 0l-8 8-8-8 4-4h8l4 4zm-8 6.5L14.5 6l-3-3h-7l-3 3L8 12.5z"
    />
  </svg>
);

export const TextIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} component={TextIconSvg} {...props} />
);
