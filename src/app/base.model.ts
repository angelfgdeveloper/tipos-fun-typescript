export interface BaseModel {
  // readonly id: string | number; // readonly Solo lectura
  readonly id: string; // readonly Solo lectura
  readonly createdAt: Date;
  updatedAt: Date;
}
