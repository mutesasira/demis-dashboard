export const processSingleValue = (data: any) => {
  if (
    Number(data.numerators) !== NaN &&
    Number(data.denominators) !== NaN &&
    Number(data.denominators) !== 0
  ) {
    return Number(data.numerators) / Number(data.denominators);
  }
  return 0;
};
export const processSingleRowValue = (data: any) => {
  if (
    Number(data.numerators) !== NaN &&
    Number(data.denominators) !== NaN &&
    Number(data.denominators) !== 0
  ) {
    return Number(data.numerators) / Number(data.denominators);
  }
  return 0;
};

export function process_schools_registered(
  data: any,
  sublevels: { id: string; name: string }[],
  days: number
): any[] {
  const x = sublevels.map(({ name }) => name);

  console.log(data);

  const with_symptoms = {
    name: "With Symptoms",
    x,
    y: sublevels.map(({ id }) => data.denominators[id]),
    type: "bar",
    textposition: "auto",
  };
  const referred_for_testing = {
    name: "Referred for Testing",
    x,
    y: sublevels.map(({ id }) => data.numerators[id]),
    type: "bar",
    textposition: "auto",
    texttemplate: "%{y}",
    // hoverinfo: "none",
  };
  return [with_symptoms, referred_for_testing];
}
export function processPieData(
  data: any,
  sublevels: { id: string; name: string }[]
) {
  return [
    {
      values: Object.values(data.numerators),
      labels: Object.keys(data.numerators).map(
        (ou: string) => sublevels.find(({ id }) => id === ou)?.name
      ),
      type: "pie",
      textinfo: "label+percent+name",
      hoverinfo: "label+percent+  name",
      textposition: "inside",
      hole: 0.05,
    },
  ];
}
export function processBarData2(
  data: any,
  sublevels: { id: string; name: string }[]
  ) {
    return [
      {
        values: Object.values(data.numerators),
        labels: Object.keys(data.numerators).map(
          (ou: string) => sublevels.find(({ id }) => id === ou)?.name
        ),
        type: "bar",
        textinfo: "label+percent+name",
        hoverinfo: "label+percent+  name",
        textposition: "inside",
        hole: 0.05,
      },
    ];

  
}

export function processDonutData(
  data: any,
  sublevels: { id: string; name: string }[]
) {
  return [
    {
      values: Object.values(data.numerators),
      labels: Object.keys(data.numerators).map(
        (ou: string) => sublevels.find(({ id }) => id === ou)?.name
      ),
      type: "pie",
      textinfo: "label+percent+name",
      hoverinfo: "label+percent+name",
      textposition: "inside",
      hole: 0.4,
    },
  ];
}
export const calculateNoScreened = (data: any) => {
  if (
    Number(data.numerators) !== NaN &&
    Number(data.denominators) !== NaN &&
    Number(data.denominators) !== 0
  ) {
    return Number(data.numerators) / Number(data.denominators);
  }
};
export function processTestData(
  data: any,
  sublevels: { id: string; name: string }[],
  days: number
): any[] {
  const x = sublevels.map(({ name }) => name);

  
  const referred = {
    name: "Isolated at School",
    x,
    y: sublevels.map(({ id }) => data.numerators[id] || 0),
    type: "bar",
    textposition: "auto",
    texttemplate: "%{y}",
  };
  return [referred];
}
export function processTestedPositive(
  data: any,
  sublevels: { id: string; name: string }[],
): any[] {
  const x = sublevels.map(({ name }) => name);

  const referred = {
    name: "Referred For Testing",
    x,
    y: sublevels.map(({ id }) =>
      data.denominators[id] !== undefined ? data.denominators[id] : 0
    ),
    type: "bar",
    textposition: "auto",
    texttemplate: "%{y}",
  };
  const reportedPositive = {
    name: "Reported Positive",
    x,
    y: sublevels.map(({ id }) => data.numerators[id] || 0),
    type: "bar",
    textposition: "auto",
    texttemplate: "%{y}",
  };
  return [referred, reportedPositive];
}
export const processVaccinationCoverage = (data: any) => {
  if (
    Number(data.numerators) !== NaN &&
    Number(data.denominators) !== NaN &&
    Number(data.denominators) !== 0
  ) {
    return (Number(data.numerators) * 100) / Number(data.denominators);
  }
  return 0;
};

export function processBarData(data: any) {
  const x = Object.keys(data.numerators);
  const y = Object.values(data.numerators);

  const reportedSchools = {
    name: "Reported schools",
    //x: ['2022-01-01'],
    x,
    //y: data.numerators.map(({ value }: any) => data[1]),
    y,
    type: "bar",
    textposition: "auto",
    texttemplate: "%{y}",
    // hoverinfo: "none",
  };

  
  return [reportedSchools];
}


