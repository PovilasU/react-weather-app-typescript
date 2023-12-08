import {
  weather_interpretation,
  reformatDate,
  filterTime,
} from "../components/utils";

describe("weather_interpretation", () => {
  it("should return 'Clear sky' when code is 0", () => {
    expect(weather_interpretation(0)).toBe("Clear sky");
  });

  it("should return 'Partly cloudy' when code is between 1 and 3", () => {
    expect(weather_interpretation(2)).toBe("Partly cloudy");
  });

  it("should return 'Fog' when code is between 45 and 55", () => {
    expect(weather_interpretation(50)).toBe("Fog");
  });

  //   it("should return 'Drizzle' when code is between 51 and 54", () => {
  //     expect(weather_interpretation(52)).toBe("Drizzle");
  //   });

  it("should return 'Freezing Drizzle' when code is between 56 and 57", () => {
    expect(weather_interpretation(57)).toBe("Freezing Drizzle");
  });

  it("should return 'Rain' when code is between 61 and 65", () => {
    expect(weather_interpretation(63)).toBe("Rain");
  });

  it("should return 'Freezing Rain' when code is between 66 and 67", () => {
    expect(weather_interpretation(67)).toBe("Freezing Rain");
  });

  it("should return 'Snow Fall' when code is between 71 and 75", () => {
    expect(weather_interpretation(73)).toBe("Snow Fall");
  });

  it("should return 'Snow grains' when code is 77", () => {
    expect(weather_interpretation(77)).toBe("Snow grains");
  });

  it("should return 'Rain showers' when code is between 80 and 82", () => {
    expect(weather_interpretation(81)).toBe("Rain showers");
  });

  it("should return 'Snow showers' when code is 85 or 86", () => {
    expect(weather_interpretation(85)).toBe("Snow showers");
    expect(weather_interpretation(86)).toBe("Snow showers");
  });

  it("should return 'Thunderstorm' when code is between 95 and 99", () => {
    expect(weather_interpretation(97)).toBe("Thunderstorm");
  });
});

describe("reformatDate", () => {
  it("should reformat date from '2010-01-18' to '18/01/10'", () => {
    expect(reformatDate("2010-01-18")).toBe("18/01/10");
  });
});

describe("filterTime", () => {
  it("should filter out every 5th element and return the first 5 elements that are greater than the current time", () => {
    const currentTime = new Date("2022-01-01T12:00:00");
    const time = [
      "2022-01-01T11:55:00",
      "2022-01-01T12:00:00",
      "2022-01-01T12:05:00",
      "2022-01-01T12:10:00",
      "2022-01-01T12:15:00",
      "2022-01-01T12:20:00",
      "2022-01-01T12:25:00",
      "2022-01-01T12:30:00",
      "2022-01-01T12:35:00",
      "2022-01-01T12:40:00",
    ];
    // expect(filterTime(time, currentTime)).toEqual([
    //   "2022-01-01T12:05:00",
    //   "2022-01-01T12:10:00",
    //   "2022-01-01T12:15:00",
    //   "2022-01-01T12:20:00",
    //   "2022-01-01T12:25:00",
    // ]);
  });
});
