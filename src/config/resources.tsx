import type { IResourceItem } from "@refinedev/core";

import {
  CrownOutlined,
  DashboardOutlined,
  ProjectOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Home",
      icon: <DashboardOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
    },
  },
  {
    name: "scrumboard",
    meta: {
      label: "Kanban",
      icon: <ProjectOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
    },
  },

  {
    name: "tasks",
    list: "/scrumboard/kanban",
    create: "/scrumboard/kanban/create",
    edit: "/scrumboard/kanban/edit/:id",
    meta: {
      label: "Kanban Board",
      parent: "scrumboard",
    },
  },
  {
    name: "taskStages",
    create: "/scrumboard/kanban/stages/create",
    edit: "/scrumboard/kanban/stages/edit/:id",
    list: "/scrumboard/kanban",
    meta: {
      hide: true,
    },
  },
  {
    name: "administration",
    meta: {
      label: "Administration",
      icon: <CrownOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
    },
  },
  {
    name: "settings",
    list: "/administration/settings",
    meta: {
      label: "Settings",
      parent: "administration",
    },
  },
];
