import React, { FC } from "react";

import { CrownOutlined, StarOutlined, UserOutlined } from "@ant-design/icons";
import { Tag, type TagProps } from "antd";

import { User } from "@/graphql/schema.types";

type Props = {
  role: User["role"];
};

export const RoleTag: FC<Props> = ({ role }) => {
  const variants: {
    [key in User["role"]]: {
      color: TagProps["color"];
      icon: React.ReactNode;
    };
  } = {
    ADMIN: {
      color: "red",
      icon: <CrownOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
    },
    SALES_INTERN: {
      color: "blue",
      icon: <UserOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
    },
    SALES_PERSON: {
      color: "green",
      icon: <UserOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
    },
    SALES_MANAGER: {
      color: "cyan",
      icon: <StarOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
    },
  };

  const text = role.replace("_", " ").toLowerCase();

  return (
    <Tag
      style={{
        textTransform: "capitalize",
      }}
      color={variants[role].color}
      icon={variants[role].icon}
    >
      {text}
    </Tag>
  );
};
