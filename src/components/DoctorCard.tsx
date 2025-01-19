import Card from 'react-bootstrap/Card';
import IDoctor from '../interfaces/Doctor';
import DoctorClass from '../classes/Doctor';

export default function DoctorCard(doctorData: IDoctor) {
const doctor = new DoctorClass(
  doctorData.id,
  doctorData.imagen,
  doctorData.nombre,
  doctorData. especialidad,
  doctorData.descripcion,
  doctorData.experiencia
)

if(doctor.id==1){doctor.updateSpecialty("Med. General")} // cambio de especialidad a doctor con id=1


  return (
    <>
      <Card className="p-0" >
        <Card.Img variant="top" src={doctor.imagen} />
        <Card.Body>
          <Card.Title>{doctor.nombre}</Card.Title>
          <Card.Title className='fst-italic'>{doctor.especialidad}</Card.Title>
          <Card.Text>
            {doctor.descripcion}.
          </Card.Text>
          <Card.Text>
            Años de experiencia: {doctor.experiencia}.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
