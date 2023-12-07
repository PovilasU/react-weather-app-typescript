
const reformatDate = (dateStr: string): string => {
  let dArr = dateStr.split("-");  // ex input: "2010-01-18"
  return dArr[2] + "/" + dArr[1] + "/" + dArr[0].substring(2); //ex output: "18/01/10"
}

const filterTime = (time: string[], currentTime: Date): string[] => {
  return time
    .filter((_, idx) => idx % 5 !== 0 && new Date(time[idx]) > currentTime)
    .slice(0, 5);
};


interface ForecastProps {
  info: any;
  type: string;
}

const Forecast: React.FC<ForecastProps> = ({ info, type }) => {
  let { temperature_2m_max, temperature_2m_min, temperature_2m, time } =
    info[type.toLowerCase()];

  if (type === "Hourly") {
    const currentTime = new Date();
    time = filterTime(time, currentTime);
    temperature_2m = filterTime(temperature_2m, currentTime);
  }

  return (
    <>
      <h2>{type} Forecast</h2>
      <section className="week-forecast-wrapper module">
        {Object.values(time).map((day: any, i: number) => (
          <div key={day} className="week-forecast">
            <div>{reformatDate(day)}</div>
            {type === "Daily" ? (
              <>
                <div>{Object.values(temperature_2m_max)[i] as React.ReactNode}&#176;C</div>
                <div>{Object.values(temperature_2m_min)[i] as React.ReactNode}&#176;C</div>
              </>
            ) : (
              <>
                <div>{Object.values(temperature_2m)[i] as React.ReactNode}&#176;C</div>
              </>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default Forecast;



