import React from "react";
import { ImLocation2 } from "react-icons/im";
import {
  Text,
  Box,
  Card,
  Group,
  Image,
  Space,
  Title,
  Grid,
  Divider,
  Badge,
  Button,
} from "@mantine/core";
const TicketsDetail = ({ seats, listSeat }) => {
  return (
    <Card
      radius="xl"
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[2],
        color: theme.colors.blue,
        textAlign: "center",
      })}
    >
      <Box
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={(theme) => ({
            width: 150,
            height: 150,
            borderRadius: "50%",
            border: `4px solid ${theme.colors.orange[5]}`,
            overflow: "hidden",
          })}
          mx="auto"
        >
          <Image
            src={seats?.thongTinPhim.hinhAnh}
            fit="cover"
            withPlaceholder
          />
        </Box>
      </Box>
      <Space h={16} />
      <Title order={2}>{seats?.thongTinPhim?.tenPhim || "..."}</Title>
      <Space h={16} />

      <Grid>
        <Grid.Col span={6}>
          <Title order={4}>Ngày:</Title>
          <Space h={8} />
          <Text> {seats?.thongTinPhim?.ngayChieu || "--/--/--"}</Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Title order={4}>Giờ:</Title>
          <Space h={8} />
          <Text>{seats?.thongTinPhim?.gioChieu || "-:-"}</Text>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={6}>
          <Title order={4}>Cụm:</Title>
          <Space h={8} />
          <Text>{seats?.thongTinPhim?.tenCumRap}</Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Title order={4}>Rạp:</Title>
          <Space h={8} />
          <Text>{seats?.thongTinPhim.tenRap || "-:-"}</Text>
        </Grid.Col>
      </Grid>
      <Space h={16} />
      <Text>
        <ImLocation2 />
        {seats?.thongTinPhim.diaChi}
      </Text>
      <Space h={32} />

      <Divider
        sx={{
          position: "relative",
        }}
        size={"sm"}
        variant="dashed"
        label={
          <>
            <Box
              sx={(theme) => ({
                position: "absolute",
                left: -56,
                height: 56,
                width: 56,
                backgroundColor: theme.colors.dark[7],
                borderRadius: "50%",
                zIndex: 100,
              })}
            />
            <Box
              sx={(theme) => ({
                position: "absolute",
                right: -56,
                height: 56,
                width: 56,
                backgroundColor: theme.colors.dark[7],
                borderRadius: "50%",
                zIndex: 100,
              })}
            />
          </>
        }
      />
      <Space h={15} />
      <Group
        sx={(theme) => ({
          color: theme.colors.gray[5],
        })}
      >
        {listSeat?.map((seat) => (
          <Badge
            radius="sm"
            variant="gradient"
            gradient={{ from: "orange", to: "red" }}
            sx={(theme) => ({
              color: theme.colors.white,
              fontWeight: 400,
            })}
          >
            {seat.tenGhe}
          </Badge>
        ))}
      </Group>
      <Space h={15} />
      <Text
        sx={(theme) => ({
          fontSize: 32,
          fontWeight: 500,
          backgroundColor: theme.colors.gray[3],
          borderRadius: "4px",
          color: theme.colors.orange,
        })}
      >
        {listSeat?.reduce((total, item) => {
          return total + Number(item.giaVe);
        }, 0)}
      </Text>

      <Space h={15} />
    </Card>
  );
};

export default TicketsDetail;
