import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import style from "@/styles/Responsable.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from 'react-modal';
import Form from '@/components/Formulaire/Pointage/Form';
import axios from 'axios';

Modal.setAppElement('#__next');

const localizer = momentLocalizer(moment);

function Calendrier() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pluitIsOpen, setpluitIsOpen] = useState(false);
  const [information, setInformation] = useState([]);
  const [isPointer, setisPointer] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get('https://api.weatherapi.com/v1/forecast.json?key=b9826ee23aea4be8a7c31759232905&q=tunisia&days=10');
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const generateEventOccurrences = (startDate, endDate) => {
    if (!weatherData || !weatherData.forecast) {
      return [];
    }

    const events = [];
    const currentDate = moment(startDate);

    while (currentDate.isSameOrBefore(endDate, "day")) {
      if (currentDate.day() !== 0) {
        const start = moment(currentDate).hour(8).toDate();
        const end = moment(currentDate).hour(17).toDate();

        const isRainy = checkIfRainy(currentDate);
        const isCold = checkIfCold(currentDate);

        events.push({
          title: isRainy && isCold ? `🌨🌧Pluie🌨🌧` : "Votre pointage",
          start,
          end,
          color: isRainy && isCold ? "#0084fff5" : "#e09900",
          type: isPointer,
        });
      }

      currentDate.add(1, "day");
    }

    return events;
  };

  const checkIfRainy = (date) => {
    if (!weatherData || !weatherData.forecast || !weatherData.forecast.forecastday) {
      return false;
    }

    const forecastDate = date.format('YYYY-MM-DD');
    const forecast = weatherData.forecast.forecastday.find(day => day.date === forecastDate);

    if (forecast && forecast.day.condition.text.toLowerCase().includes('rain')) {
      return true;
    }

    return false;
  };

  const checkIfCold = (date) => {
    if (!weatherData || !weatherData.forecast || !weatherData.forecast.forecastday) {
      return false;
    }
    const forecastDate = date.format('YYYY-MM-DD');
    const forecast = weatherData.forecast.forecastday.find(day => day.date === forecastDate);
    if (forecast && forecast.day.avgtemp_c <= 30) {
      return true;
    }

    return false;
  };

  const getTemperature = (date) => {
    if (!weatherData || !weatherData.forecast || !weatherData.forecast.forecastday) {
      return null;
    }

    const forecastDate = date.format('YYYY-MM-DD');
    const forecast = weatherData.forecast.forecastday.find(day => day.date === forecastDate);

    if (forecast) {
      return forecast.day.avgtemp_c;
    }

    return null;
  };

  const events = generateEventOccurrences("2022-01-06", "2023-10-07");

  const handleOpenModal = (info) => {
    if (info.title === `🌨🌧Pluie🌨🌧`) {
      setpluitIsOpen(true);
    } else {
      setisPointer(true);
      setModalIsOpen(true);
      setInformation(info);
    }
  };

  const handleCloseModal = () => {
    setisPointer(false);
    setModalIsOpen(false);
    setpluitIsOpen(false);
  };

  const minTime = new Date();
  minTime.setHours(7, 0, 0);

  return (
    <>
      {Object.keys(weatherData).length > 0 && (
        <div className="App" style={{ padding: "14px" }}>
          <Calendar
            localizer={localizer}
            startAccessor="start"
            events={events}
            endAccessor="end"
            style={{
              height: "1000px",
              width: "1100px",
              marginTop: "30px",
              marginLeft: "-50px"
            }}
            eventPropGetter={(event) => {
              return {
                style: {
                  backgroundColor: event.color,
                  alignItems: "center",
                  textAlign:"center",
                  height: "150px",
                  fontWeight: "500",
                  paddingTop: "50px",
                  outline: "none",
                },
              };
            }}
            onSelectEvent={(event) => handleOpenModal(event)}
            views={[Views.MONTH, Views.WEEK, Views.DAY]}
            min={minTime}
          />
        </div>
      )}
      <Modal
        isOpen={pluitIsOpen}
        onRequestClose={handleCloseModal}
        className={style.modal}
        overlayClassName={style.overlay}
      >
        <div className={style.header}>
          <h1></h1>
          <button type="button" className={style.close} onClick={handleCloseModal}>
            <span className="close-icon">
              <i className="fas fa-times"></i>
            </span>
          </button>
        </div>
        <div className={style.pluit}>
          <Image src="/img/pluit.png" width={300} height={300} alt="" />
        </div>
        <h3 className={style.titlep}>Attention, il y a de la pluie aujourd'hui ! Température: {getTemperature(moment())}°C</h3>
      </Modal>


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className={style.modal}
        overlayClassName={style.overlay}
      >
        <div className={style.header}>
          <h1 className={style.title}>Pointage de Responsable</h1>
          <button type="button" className={style.close} onClick={handleCloseModal}>
            <span className="close-icon">
              <i className="fas fa-times"></i>
            </span>
          </button>
        </div>
        <Form infodate={information.start} />
      </Modal>
    </>
  );
}

export default Calendrier;
