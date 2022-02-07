import { Indicator } from "../interfaces";

type func = (...args: any[]) => Indicator;

export const mainDashboard: { [key: string]: func } = {
  percentage_schools_reporting: (parent, aoc) => {
    return {
      numerator: {
        sqlView: "wcQpj3qe5a0",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent,
          aoc,
        },
      },
      denominator: {
        sqlView: "Y3I1lzy1tTJ",
        parameters: { 
            dx: "HwcoAIH8yOC" },
            parent, 
      },
    };
  },
  isolated_students: (parent)=>{
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {parent,dx: "rrvYimAHvV7"},
      },
      denominator: {
        sqlView: "SebGxVV33Vn",
        parameters: { parent, dx: "l2CJ4fYySx9" },
      }
    }
  },
  isolated_at_school_symptoms: (parent, aoc) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "rrvYimAHvV7",
          parent,
          aoc,
        },
      },
      denominator: {
        sqlView: "Y3I1lzy1tTJ",
        parameters: { 
            dx: "SebGxVV33Vn" },
            parent, 
      },
    };
  },

  total_schools : (parent) => {
    return {
      numerator: {
        sqlView: "wcQpj3qe5a0",
        parameters: { parent },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  }, 
  schools_reporting : (parent) => {
    return {
      numerator: {
        sqlView: "rnzi0SdtaLq",
        parameters: { parent },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  no_referred_testing : (parent) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "HwcoAIH8yOC",
          parent,
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  }, 
  no_screened : (parent) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "PEn6nKhtnGg",
          parent,
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  screened_with_covid_symptoms : (parent) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "l2CJ4fYySx9",
          parent,
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  tested_covid19_positive : (parent) => {
    return {
      numerator: {
        sqlView: "Ks3uLn0bb17",
        parameters: {
          dx: "mGk4R6i1tz9",
          parent,
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    }
  },
  total_reported_positive: (parent, part, aoc) => {
    return {
      numerator: {
        sqlView: "lsP2X9I14km",
        parameters: {
          dx: "mGk4R6i1tz9",
          part,
          parent,
          aoc,
        },
      },
      denominator: {
        sqlView: "fepCqYMstWu",
        parameters: {},
      },
    };
  },
};
