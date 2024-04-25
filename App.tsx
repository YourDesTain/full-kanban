import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { ErrorComponent, useNotificationProvider } from "@refinedev/antd";
import { Authenticated, Refine } from "@refinedev/core";
import routerProvider, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";

import { App as AntdApp, ConfigProvider } from "antd";

import { resources, themeConfig } from "@/config";
import { authProvider, dataProvider, liveProvider } from "@/providers";

import { AlgoliaSearchWrapper, FullScreenLoading, Layout } from "./components";
import { useAutoLoginForDemo } from "./hooks";
import { SettingsPage } from "./routes/administration";

import { DashboardPage } from "./routes/dashboard";
import { ForgotPasswordPage } from "./routes/forgot-password";
import { LoginPage } from "./routes/login";
import { RegisterPage } from "./routes/register";
import {
  KanbanCreatePage,
  KanbanCreateStage,
  KanbanEditPage,
  KanbanEditStage,
  KanbanPage,
} from "./routes/scrumboard/kanban";

import { UpdatePasswordPage } from "./routes/update-password";

import "./utilities/init-dayjs";
import "@refinedev/antd/dist/reset.css";
import "./styles/antd.css";
import "./styles/fc.css";
import "./styles/index.css";

const App: React.FC = () => {
  const { loading } = useAutoLoginForDemo();
  if (loading) {
    return <FullScreenLoading />;
  }

  return (
    <AlgoliaSearchWrapper>
      <BrowserRouter>
        <ConfigProvider theme={themeConfig}>
          <AntdApp>
              <Refine
                authProvider={authProvider}
                dataProvider={dataProvider}
                liveProvider={liveProvider}
                routerProvider={routerProvider}
                resources={resources}
                notificationProvider={useNotificationProvider}
                options={{
                  liveMode: "auto",
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-layout"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <Layout>
                          <Outlet />
                        </Layout>
                      </Authenticated>
                    }
                  >
                    <Route index element={<DashboardPage />} />
                    <Route path="/scrumboard" element={<Outlet />}>
                      <Route
                        path="kanban"
                        element={
                          <KanbanPage>
                            <Outlet />
                          </KanbanPage>
                        }
                      >
                        <Route path="create" element={<KanbanCreatePage />} />
                        <Route path="edit/:id" element={<KanbanEditPage />} />
                        <Route
                          path="stages/create"
                          element={<KanbanCreateStage />}
                        />
                        <Route
                          path="stages/edit/:id"
                          element={<KanbanEditStage />}
                        />
                      </Route>
                    </Route>
                    <Route path="/administration" element={<Outlet />}>
                      <Route path="settings" element={<SettingsPage />} />
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-auth"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource resource="dashboard" />
                      </Authenticated>
                    }
                  >
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPasswordPage />}
                    />
                    <Route
                      path="/update-password"
                      element={<UpdatePasswordPage />}
                    />
                  </Route>
                </Routes>
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
          </AntdApp>
        </ConfigProvider>
      </BrowserRouter>
    </AlgoliaSearchWrapper>
  );
};

export default App;
