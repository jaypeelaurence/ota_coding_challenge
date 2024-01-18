export default function enumToArray(ennum: any) {
  return Object.entries(ennum)
    .filter((e) => isNaN(e[1] as any))
    .map((e) => e[1]);
}
