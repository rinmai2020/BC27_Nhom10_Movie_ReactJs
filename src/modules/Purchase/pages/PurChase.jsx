import {
  Container,
  Grid,
  Space,
  Button,
  Group,
  Box,
  Modal,
  Title,
  Loader,
} from "@mantine/core";
import React, { useState } from "react";
import { useParams } from "react-router";
import TicketsDetail from "../components/TicketsDetail";
import TicketSelection from "../components/TicketSelection";
import movieAPI from "apis/movieAPI";
import useRequest from "hooks/useRequest";
import { useMediaQuery } from "@mantine/hooks";

// import "./purchase.scss";
const PurChase = () => {
  const mobileSize = useMediaQuery("(max-width: 576px)");
  const [openedModal, setOpenedModal] = useState(false);
  const [listSeat, setList] = useState([]);
  const { purchaseId } = useParams();
  const {
    data: seats,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getTickets(purchaseId));
  const handleBooking = (seat) => {
    const IndexChair = listSeat.findIndex((item) => {
      return item.maGhe === seat.maGhe;
    });

    let newList = [...listSeat];
    if (IndexChair !== -1) {
      newList = newList.filter((item) => item.maGhe !== seat.maGhe);
    } else {
      newList.push(seat);
    }
    setList(newList);
  };
  return (
    <>
      {isLoading && (
        <>
          <Space h={240} />
          <Loader size={50} />
        </>
      )}
      {!isLoading && (
        <Container size="lg">
          <Space h={120} />
          <Title order={1}>Let book your ticket</Title>
          <Grid gutter="xl">
            <Grid.Col sm={12} lg={8} span={mobileSize ? 12 : undefined}>
              <TicketSelection
                handleBooking={handleBooking}
                purchaseId={purchaseId}
                seats={seats}
              />
            </Grid.Col>
            <Grid.Col sm={12} lg={4}>
              <TicketsDetail
                listSeat={listSeat}
                purchaseId={purchaseId}
                seats={seats}
              />
            </Grid.Col>
          </Grid>

          {mobileSize && (
            <Box
              sx={{
                height: 80,
              }}
            />
          )}
        </Container>
      )}

      {mobileSize && (
        <Group
          sx={(theme) => ({
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
          })}
        >
          <Button
            onClick={() => setOpenedModal(true)}
            size="xl"
            variant="light"
            fullWidth
          ></Button>
        </Group>
      )}
    </>
  );
};

export default PurChase;
