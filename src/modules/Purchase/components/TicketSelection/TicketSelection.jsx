import React, { useState } from "react";
import "./ticketSele.scss";
import { useToggle } from "@mantine/hooks";
import { Button } from "@mantine/core";

const TicketSelection = ({ purchaseId, seats, handleBooking }) => {
  const [selected, setSelected] = useState(false);

  const [value, toggle] = useToggle(["blue", "orange"]);
  return (
    <>
      <div className=" py-5 d-flex">
        <div className="col-12 d-flex flex-wrap">
          {seats?.danhSachGhe.map((seat) => {
            return (
              <button
                onClick={() => handleBooking(seat)}
                className="chairs"
                key={seat.maGhe}
                style={{
                  backgroundColor: seat.daDat
                    ? "#e6b908"
                    : seat.loaiGhe === "Vip"
                    ? "#2deb0c"
                    : selected
                    ? "#d10b0b"
                    : "",
                  cursor: seat.daDat ? "not-allowed" : "pointer",
                }}
              >
                {seat.stt}
              </button>
            );
          })}
        </div>
      </div>
      <div className="d-flex flex-row">
        <div className="me-3">
          <div
            style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              backgroundColor: "#514e4e",
            }}
            className="rounded-1"
          ></div>{" "}
          Ghế thường
        </div>
        <div className="me-3">
          <div
            style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              backgroundColor: "#2deb0c",
            }}
            className="rounded-1"
          ></div>{" "}
          Ghế VIP
        </div>
        <div className="me-3">
          <div
            style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              backgroundColor: "#e6b908",
            }}
            className="rounded-1"
          ></div>{" "}
          Ghế đã đặt
        </div>
        <div className="me-3">
          <div
            style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              backgroundColor: "#d10b0b",
            }}
            className="rounded-1"
          ></div>{" "}
          Ghế đang chọn
        </div>
      </div>
    </>
  );
};

export default TicketSelection;
