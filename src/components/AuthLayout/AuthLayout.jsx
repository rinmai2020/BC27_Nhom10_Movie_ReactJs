import React from "react";
import { Col, Row, Image } from "antd";
import { Outlet } from "react-router-dom";
import "./authLayout.scss";
import cn from "classnames";
import styled from "styled-components";
import { Container, Group } from "@mantine/core";
const AuthLayout = () => {
  return (
    <Auth className="bgAuth">
      <Container size="lg">
        <Group className="formRow">
          <Outlet />
        </Group>
      </Container>
    </Auth>
  );
};

export default AuthLayout;
const Auth = styled.div`
  height: 100vh;
  display: flex;
`;
