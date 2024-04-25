import React from "react";

import { Col, Row } from "antd";

import {
  DashboardTasksChart,
} from "./components";


export const DashboardPage: React.FC = () => {

  return (
    <div className="page-container">
      <Row
        gutter={[32, 32]}
        style={{
          marginTop: "32px",
        }}
      >
        <Col
          xs={24}
          sm={24}
          xl={12}
          style={{
            height: "448px",
          }}
        >
          <DashboardTasksChart />
        </Col>
      </Row>
    </div>
  );
};
