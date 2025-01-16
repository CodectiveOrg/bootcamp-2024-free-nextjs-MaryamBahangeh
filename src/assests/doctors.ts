import { DoctorModel } from "@/models/doctor";

import sara from "@/assests/doctors-images/sara.jpg";
import john from "@/assests/doctors-images/john.jpg";
import mary from "@/assests/doctors-images/mary.jpg";
import jack from "@/assests/doctors-images/jack.png";
import mateo from "@/assests/doctors-images/mateo.jpg";
import martin from "@/assests/doctors-images/martin.jpg";
import amaris from "@/assests/doctors-images/amaris.webp";
import lukas from "@/assests/doctors-images/lukas.webp";
import whitley from "@/assests/doctors-images/whitley.jpeg";
import brody from "@/assests/doctors-images/brody.webp";

import { SERVICE_TYPE } from "@/options/service-types-options";
import { APPOINTMENT_TIMES } from "@/options/appointment-time-options";
import { SPECIALITY_DEGREE } from "@/options/degree-options";

export const doctors: DoctorModel[] = [
  {
    id: "97420f0d-b576-4f65-9ffc-a81b4b1b4e77",
    name: "Sara Smith",
    serviceType: SERVICE_TYPE[0].value,
    serviceTypeName: SERVICE_TYPE[0].label,
    image: sara.src,
    rate: 4.99,
    totalVotes: 594,
    address: "Germany",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[4].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[4].label,
    specialityId: "1",
    specialityName: "Gynecologist",
    description:
      "Diagnosing and treating conditions of the female reproductive system",
    specialtyDegreeName: SPECIALITY_DEGREE[0].label,
    specialtyDegreeId: SPECIALITY_DEGREE[0].value,
  },
  {
    id: "88820f0d-b576-9ffc-a81b4b1b4e7",
    name: "John William",
    serviceType: SERVICE_TYPE[1].value,
    serviceTypeName: SERVICE_TYPE[1].label,
    image: john.src,
    rate: 2.8,
    totalVotes: 294,
    address: "Netherlands",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[1].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[1].label,
    specialityId: "2",
    specialityName: "Cardiologist",
    description: "Expert in the care of your heart and blood vessels",
    specialtyDegreeName: SPECIALITY_DEGREE[1].label,
    specialtyDegreeId: SPECIALITY_DEGREE[1].value,
  },
  {
    id: "88820f0d-b576-335-9ffc-a81b1b4e7",
    name: "Mary Brown",
    serviceType: SERVICE_TYPE[0].value,
    serviceTypeName: SERVICE_TYPE[0].label,
    image: mary.src,
    rate: 3.79,
    totalVotes: 894,
    address: "England",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[3].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[3].label,
    specialityId: "3",
    specialityName: "Neonatologist",
    description: "caring for newborn and premature babies",
    specialtyDegreeName: SPECIALITY_DEGREE[0].label,
    specialtyDegreeId: SPECIALITY_DEGREE[0].value,
  },
  {
    id: "8882000f0d-b576-335-9ffc-a81b4b1b4e7",
    name: "Jack Davis",
    serviceType: SERVICE_TYPE[1].value,
    serviceTypeName: SERVICE_TYPE[1].label,
    image: jack.src,
    rate: 2.99,
    totalVotes: 504,
    address: "Belgian",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[2].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[2].label,
    specialityId: "4",
    specialityName: "Pulmonologist ",
    description:
      "Diagnosing and treating diseases of the respiratory system, including airways, alveoli and blood vessels",
    specialtyDegreeName: SPECIALITY_DEGREE[3].label,
    specialtyDegreeId: SPECIALITY_DEGREE[3].value,
  },
  {
    id: "97420f0d-b576-4f65-fc-a81b4b1b4e77",
    name: "Mateo Miller",
    serviceType: SERVICE_TYPE[1].value,
    serviceTypeName: SERVICE_TYPE[1].label,
    image: mateo.src,
    rate: 4.25,
    totalVotes: 1594,
    address: "Germany",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[5].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[5].label,
    specialityId: "5",
    specialityName: "Gastroenterologist",
    description:
      "Diagnosing and treating conditions of the female reproductive system",
    specialtyDegreeName: SPECIALITY_DEGREE[0].label,
    specialtyDegreeId: SPECIALITY_DEGREE[0].value,
  },
  {
    id: "88820f0d-76-9ffc-a81b4b1b4e7",
    name: "Martin Anderson",
    serviceType: SERVICE_TYPE[0].value,
    serviceTypeName: SERVICE_TYPE[0].label,
    image: martin.src,
    rate: 3.99,
    totalVotes: 1204,
    address: "Netherlands",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[3].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[3].label,
    specialtyDegreeName: SPECIALITY_DEGREE[1].label,
    specialtyDegreeId: SPECIALITY_DEGREE[1].value,

    specialityId: "6",
    specialityName: "Cosmetologist",
    description: "Expert in the care of your heart and blood vessels",
  },
  {
    id: "88820f-b576-335ffc-a81b1b4e7",
    name: "Mary Taylor",
    serviceType: SERVICE_TYPE[0].value,
    serviceTypeName: SERVICE_TYPE[0].label,
    image: mary.src,
    rate: 4.99,
    totalVotes: 834,
    address: "England",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[2].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[2].label,
    specialityId: "6",
    specialityName: "Cosmetologist",
    description: "caring for newborn and premature babies",
    specialtyDegreeName: SPECIALITY_DEGREE[2].label,
    specialtyDegreeId: SPECIALITY_DEGREE[2].value,
  },
  {
    id: "8882000f-b576-335-9ffc-a81b4b1b4e7",
    name: "Jack Clark",
    serviceType: SERVICE_TYPE[1].value,
    serviceTypeName: SERVICE_TYPE[1].label,
    image: jack.src,
    rate: 5,
    totalVotes: 5014,
    address: "Belgian",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[4].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[4].label,
    specialityId: "1",
    specialityName: "Gynecologist ",
    description:
      "Diagnosing and treating diseases of the respiratory system, including airways, alveoli and blood vessels",
    specialtyDegreeName: SPECIALITY_DEGREE[1].label,
    specialtyDegreeId: SPECIALITY_DEGREE[1].value,
  },

  {
    id: "97420f0d-b576-4f6-a81b4b1b4e77",
    name: "Amaris Davenport",
    serviceType: SERVICE_TYPE[1].value,
    serviceTypeName: SERVICE_TYPE[1].label,
    image: amaris.src,
    rate: 3.99,
    totalVotes: 1094,
    address: "England",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[3].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[3].label,
    specialityId: "1",
    specialityName: "Gynecologist",
    description:
      "Diagnosing and treating conditions of the female reproductive system",
    specialtyDegreeName: SPECIALITY_DEGREE[2].label,
    specialtyDegreeId: SPECIALITY_DEGREE[2].value,
  },

  {
    id: "88820f0-576-9ffc-a81b4b1b4e7",
    name: "Lukas Magana",
    serviceType: SERVICE_TYPE[1].value,
    serviceTypeName: SERVICE_TYPE[1].label,
    image: lukas.src,
    rate: 3.8,
    totalVotes: 694,
    address: "Netherlands",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[3].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[3].label,
    specialityId: "2",
    specialityName: "Cardiologist",
    description: "Expert in the care of your heart and blood vessels",
    specialtyDegreeName: SPECIALITY_DEGREE[0].label,
    specialtyDegreeId: SPECIALITY_DEGREE[0].value,
  },
  {
    id: "88820d-b576-335-9ffc-a81b1b4e7",
    name: "Whitley Hail",
    serviceType: SERVICE_TYPE[0].value,
    serviceTypeName: SERVICE_TYPE[0].label,
    image: whitley.src,
    rate: 4.22,
    totalVotes: 2264,
    address: "England",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[3].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[3].label,
    specialityId: "3",
    specialityName: "Neonatologist",
    description: "caring for newborn and premature babies",
    specialtyDegreeName: SPECIALITY_DEGREE[0].label,
    specialtyDegreeId: SPECIALITY_DEGREE[0].value,
  },
  {
    id: "8800f0d-b576-335-9ffc-a81b4b1b4e7",
    name: "Brody Stone",
    serviceType: SERVICE_TYPE[1].value,
    serviceTypeName: SERVICE_TYPE[1].label,
    image: brody.src,
    rate: 3.7,
    totalVotes: 1014,
    address: "Belgian",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[2].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[2].label,
    specialityId: "4",
    specialityName: "Pulmonologist ",
    description:
      "Diagnosing and treating diseases of the respiratory system, including airways, alveoli and blood vessels",
    specialtyDegreeName: SPECIALITY_DEGREE[3].label,
    specialtyDegreeId: SPECIALITY_DEGREE[3].value,
  },

  {
    id: "88820f0d-b576-335ffc-a81b1b4e7",
    name: "River Strong",
    serviceType: SERVICE_TYPE[1].value,
    serviceTypeName: SERVICE_TYPE[1].label,
    image: amaris.src,
    rate: 4.83,
    totalVotes: 456,
    address: "England",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[4].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[4].label,
    specialityId: "6",
    specialityName: "Cosmetologist",
    description: "caring for newborn and premature babies",
    specialtyDegreeName: SPECIALITY_DEGREE[2].label,
    specialtyDegreeId: SPECIALITY_DEGREE[2].value,
  },
  {
    id: "8882000f-b576-335-9ffc-a84b1b4e7",
    name: "Atlas Sierra",
    serviceType: SERVICE_TYPE[0].value,
    serviceTypeName: SERVICE_TYPE[0].label,
    image: jack.src,
    rate: 3.7,
    totalVotes: 9814,
    address: "Belgian",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[2].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[2].label,
    specialityId: "1",
    specialityName: "Gynecologist ",
    description:
      "Diagnosing and treating diseases of the respiratory system, including airways, alveoli and blood vessels",
    specialtyDegreeName: SPECIALITY_DEGREE[2].label,
    specialtyDegreeId: SPECIALITY_DEGREE[2].value,
  },

  {
    id: "97420f0d-b576-4f6-a84b1b4e77",
    name: "Abner Duran",
    serviceType: SERVICE_TYPE[0].value,
    serviceTypeName: SERVICE_TYPE[0].label,
    image: jack.src,
    rate: 2.56,
    totalVotes: 7940,
    address: "England",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[1].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[1].label,
    specialityId: "1",
    specialityName: "Gynecologist",
    description:
      "Diagnosing and treating conditions of the female reproductive system",
    specialtyDegreeName: SPECIALITY_DEGREE[1].label,
    specialtyDegreeId: SPECIALITY_DEGREE[1].value,
  },

  {
    id: "88820f0-576-9ffc-a84b1b4e7",
    name: "Jamal Tanner",
    serviceType: SERVICE_TYPE[0].value,
    serviceTypeName: SERVICE_TYPE[0].label,
    image: lukas.src,
    rate: 4.6,
    totalVotes: 254,
    address: "England",
    firstAvailableAppointmentValue: APPOINTMENT_TIMES[3].value,
    firstAvailableAppointmentLabel: APPOINTMENT_TIMES[3].label,
    specialityId: "2",
    specialityName: "Cardiologist",
    description: "Expert in the care of your heart and blood vessels",
    specialtyDegreeName: SPECIALITY_DEGREE[0].label,
    specialtyDegreeId: SPECIALITY_DEGREE[0].value,
  },
];
