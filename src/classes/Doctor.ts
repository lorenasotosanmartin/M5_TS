import Doctor from "../interfaces/Doctor";

class DoctorClass implements Doctor{

constructor(
  public id: number,
  public imagen: string,
  public nombre: string,
  public especialidad: string,
  public descripcion: string,
  public experiencia: number) {}

 getDoctor():string{
   return `Nombre: ${this.nombre}, 
   Especialidad: ${this.especialidad}, 
   Años de experiencia: ${this.experiencia}, 
   Descripción: ${this.experiencia}`
 }

 updateSpecialty(especialidad:string):void{
  this.especialidad= especialidad;
 }

}
export default DoctorClass;