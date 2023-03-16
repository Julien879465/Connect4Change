export const antutuVal = (antutuIndice) => {
  const limits = [
    { antutuMin: 0, antutuMax: 50000, val: 40 },
    { antutuMin: 50001, antutuMax: 100000, val: 44 },
    { antutuMin: 100001, antutuMax: 150000, val: 49 },
    { antutuMin: 150001, antutuMax: 200000, val: 57 },
    { antutuMin: 200001, antutuMax: 250000, val: 74 },
    { antutuMin: 250001, antutuMax: 300000, val: 92 },
    { antutuMin: 300001, antutuMax: 350000, val: 101 },
    { antutuMin: 350001, antutuMax: 400000, val: 111 },
    { antutuMin: 400001, antutuMax: 450000, val: 123 },
    { antutuMin: 450001, antutuMax: 500000, val: 136 },
    { antutuMin: 500001, antutuMax: 550000, val: 150 },
    { antutuMin: 550001, antutuMax: 600000, val: 164 },
    { antutuMin: 600001, antutuMax: 650000, val: 179 },
    { antutuMin: 650001, antutuMax: 700000, val: 198 },
    { antutuMin: 700001, antutuMax: 750000, val: 215 },
    { antutuMin: 750001, antutuMax: 800000, val: 233 },
    { antutuMin: 800001, antutuMax: 850000, val: 252 },
    { antutuMin: 850001, antutuMax: 900000, val: 272 },
    { antutuMin: 900001, antutuMax: 950000, val: 293 },
    { antutuMin: 950001, antutuMax: 1000000000, val: 315 },
  ];

  return limits.filter(
    (limit) =>
      antutuIndice >= limit.antutuMin && antutuIndice <= limit.antutuMax
  )[0].val;
};

// console.log(antutuVal(120000));

export const ramVal = (ram) => {
  const limits = [
    { ramLimit: 1, val: 30 },
    { ramLimit: 2, val: 40 },
    { ramLimit: 3, val: 54 },
    { ramLimit: 4, val: 60 },
    { ramLimit: 6, val: 70 },
    { ramLimit: 8, val: 80 },
    { ramLimit: 12, val: 90 },
    { ramLimit: 16, val: 100 },
  ];

  return limits.filter((limit) => ram === limit.ramLimit)[0];
};

export const storageVal = (storage) => {
  const limits = [
    { storageLimit: 16, val: 31 },
    { storageLimit: 32, val: 45 },
    { storageLimit: 64, val: 66 },
    { storageLimit: 128, val: 72 },
    { storageLimit: 256, val: 80 },
    { storageLimit: 512, val: 92 },
    { storageLimit: 1000, val: 100 },
  ];

  return limits.filter((limit) => storage === limit.storageLimit)[0];
};

export const sum = (antutuIndice, ram, storage) => {
  return antutuVal(antutuIndice) + ramVal(ram) + storageVal(storage);
};

export const totalWeighted = (total, weighting) => {
  const ponderationPositive = ["5%", "10%"];
  const ponderationNegative = ["-100%", "-50%", "-10%", "-5%"];

  if (ponderationPositive.includes(weighting)) {
    return (
      (parseInt(
        ponderationPositive.filter((pond) => weighting === pond),
        10
      ) *
        total) /
      100
    );
  } else {
    return (
      ((100 +
        parseInt(
          ponderationNegative.filter((pond) => weighting === pond),
          10
        )) *
        total) /
      100
    );
  }
};

export const category = (weightTotal) => {
  const limits = [
    { minTotal: 0, maxTotal: 90, val: "1 - HC", price: "N/A" },
    { minTotal: 91, maxTotal: 165, val: "2 - C", price: "50" },
    { minTotal: 166, maxTotal: 255, val: "3 - B", price: "100€" },
    { minTotal: 256, maxTotal: 375, val: "4 - A", price: "150" },
    { minTotal: 375, maxTotal: 1000, val: "Premium", price: "200" },
  ];

  return limits.filter(
    (limit) => weightTotal >= limit.minTotal && weightTotal <= limit.maxTotal
  )[0];
};

export default {
  antutuVal,
  ramVal,
  storageVal,
  sum,
  totalWeighted,
  category,
};
