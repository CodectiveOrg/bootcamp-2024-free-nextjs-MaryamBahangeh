import React from "react";
import Image from "next/image";
import Card from "@/components/card/Card";
import StarBold from "@/icons/StarBold";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import { DoctorModel } from "@/models/doctor";

import styles from "./DoctorCard.module.css";

type Props = {
  doctor: DoctorModel;
};

function DoctorCard({ doctor }: Props) {
  return (
    <Card>
      <div className={styles["doctor-card"]}>
        <div className={styles.main}>
          <div className={styles["primary-info"]}>
            <Image
              className={styles.image}
              src={doctor.image}
              alt="Doctor image"
              width={70}
              height={70}
            />

            <div className={styles["doctor-info"]}>
              <div className={styles.name}>{doctor.name}</div>
              <div className={styles.description}>
                {doctor.speciality.label} - {doctor.degree.label}
              </div>
              <div className={styles.rate}>
                <StarBold className={styles.star} /> {doctor.rate}
                <span> {" (" + doctor.totalVotes + " comments)"}</span>
              </div>
            </div>
          </div>

          <div className={styles["other-info"]}>
            <div>{doctor.description}</div>
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.secondary}>
          <div>
            Service type:
            <span className={styles.data}>{doctor.serviceTypeName}</span>
          </div>

          <div>
            First available appointment:
            <span className={styles.data}>{doctor.appointment.label}</span>
          </div>

          <div className={styles.address}>
            <MingcuteLocationLine />
            {doctor.address}
          </div>

          <div>
            <button>Book An Appointment</button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default DoctorCard;
