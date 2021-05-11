export const required = (value: string) =>
  !!value || "Este campo é obrigatorio";
export const minValue = (value: string, min: number) =>
  value?.length >= min || `Este campo precisa de no minimo ${min} letras`;
